from django.test import TestCase
from django.contrib.auth import get_user_model

class UserModelTest(TestCase):
    def test_user_creation(self):
        User = get_user_model()
        user = User.objects.create_user(username="testuser", password="12345", role="view")
        self.assertEqual(user.username, "testuser")
        self.assertTrue(user.check_password("12345"))
