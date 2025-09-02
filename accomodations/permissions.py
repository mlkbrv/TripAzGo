from rest_framework import permissions


class IsSuperHostOrAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        if request.method in permissions.SAFE_METHODS:
            return True
        return (
                (request.user.is_authenticated and request.user.is_superhost) or
                request.user.is_staff
        )


class IsSuperHostOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_authenticated and (request.user.is_superhost or request.user.is_superuser)

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return (
            request.user.is_authenticated
            and (
                request.user.is_superuser
                or (request.user.is_superhost and obj.owner == request.user)
            )
        )

class IsSuperHostOrAdminOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        return (
                (request.user.is_authenticated and request.user.is_superhost) or
                request.user.is_staff
        )
