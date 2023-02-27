from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class UserManager(BaseUserManager):
    def create_user(self, email, username, name, last_name, password=None):
        if not email:
            raise ValueError("no email address")
        user = self.model(
            username=username,
            email=self.normalize_email(email),
            name=name,
            last_name=last_name,
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, username, name, last_name, password):
        user = self.create_user(
            email, username=username, name=name, last_name=last_name, password=password
        )
        user.user_admin = True
        user.save()
        return user


class Profiles(AbstractBaseUser):
    username = models.CharField(
        max_length=100, null=False, blank=False, verbose_name="username", unique=True
    )
    email = models.EmailField(
        max_length=150, blank=False, verbose_name="email", unique=True
    )
    name = models.CharField(
        max_length=100, null=False, blank=False, verbose_name="name"
    )
    last_name = models.CharField(
        max_length=100, null=False, blank=False, verbose_name="last_name"
    )
    image = models.ImageField(
        upload_to="users_img", null=True, blank=True, verbose_name="image/users"
    )
    user_active = models.BooleanField(default=True)
    user_admin = models.BooleanField(default=False)
    objects = UserManager()
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email", "name", "last_name"]

    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.user_admin

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
