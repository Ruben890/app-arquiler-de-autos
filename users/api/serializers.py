from rest_framework import serializers
from users.models import Profiles


class ProfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profiles
        fields = ['username', 'name', 'last_name','email', 'password', ]
        extra_kwargs = {'write_only': True}

    def create(self, validated_data):
        password = validated_data['password', None]
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        updated_user = super().update(instance, validated_data)
        updated_user.set_password(validated_data["password"])
        updated_user.save()
        return updated_user
