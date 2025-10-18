from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Clinic, User

class ClinicRegistrationSerializer(serializers.ModelSerializer):
    clinic_code = serializers.CharField(write_only=True)

    class Meta:
        model = Clinic
        fields = ['name', 'email', 'location', 'manager_name', 'clinic_code']

    def create(self, validated_data):
        raw_code = validated_data.pop('clinic_code')
        clinic = Clinic(**validated_data)
        clinic.set_clinic_code(raw_code)
        clinic.save()
        return clinic

class UserRegistrationSerializer(serializers.ModelSerializer):
    clinic_code = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password', 'role', 'clinic_code']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        raw_code = validated_data.pop('clinic_code')
        email = validated_data.get('email')

        for clinic in Clinic.objects.all():
            if clinic.check_clinic_code(raw_code):
                break
        else:
            raise serializers.ValidationError({'clinic_code': 'Invalid clinic code'})

        user = User(
            email=email,
            username=email,
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            role='viewer' if validated_data.get('role') != 'admin' else 'admin',
            clinic=clinic
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'role', 'clinic']

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        print("Using MyTokenObtainPairSerializer!")  # debug line
        token = super().get_token(user)

        # Add all desired user fields as custom claims
        token['id'] = user.id
        token['username'] = user.username
        token['email'] = user.email
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['role'] = user.role
        token['clinic'] = user.clinic.name if user.clinic else None

        return token