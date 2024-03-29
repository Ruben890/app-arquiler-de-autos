from rest_framework import serializers
from users.models import Profiles


class ProfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profiles
        fields = ['username', 'name', 'last_name','image','email', 'password', 'Country', 'address', 'Street' ]
        extra_kwargs = {'write_only': True}

    def create(self, validated_data):
            user = Profiles(**validated_data)
            user.set_password(validated_data["password"])
            user.save()
            return user

    def update(self, instance, validated_data):
        updated_user = super().update(instance, validated_data)
        updated_user.set_password(validated_data["password"])
        updated_user.save()
        return updated_user
    
class Login(ProfilesSerializer):
    class Meta:
        model = Profiles
        fields = ['email', 'password', ]
        extra_kwargs = {'write_only': True}
    