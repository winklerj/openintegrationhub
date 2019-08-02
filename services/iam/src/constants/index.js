
module.exports = {

    JWT_ALGORITHMS: {
        HMAC: 'HMAC',
        RSA: 'RSA',
    },

    TOKEN_TYPES: {
        EPHEMERAL_SERVICE_ACCOUNT: 'EPHEMERAL_SERVICE_ACCOUNT',
        PERSISTENT: 'PERSISTENT',
        SELF: 'SELF',
        DELEGATE: 'DELEGATE',
    },

    STATUS: {
        ACTIVE: 'ACTIVE',
        PENDING: 'PENDING',
        DISABLED: 'DISABLED',
        AWAITING_CONFIRM: 'AWAITING_CONFIRM',
        AWAITING_ACTIVATION: 'AWAITING_ACTIVATION',
        AWAITING_ADMIN_ACTION: 'AWAITING_ADMIN_ACTION',
        AWAITING_APPROVAL: 'AWAITING_APPROVAL',
    },
    ROLES: {
        ADMIN: 'ADMIN',
        USER: 'USER',
        SERVICE_ACCOUNT: 'SERVICE_ACCOUNT',
    },
    ROLE_TYPE: {
        TENANT: 'TENANT',
        SYSTEM: 'SYSTEM',
    },
    MEMBERSHIP_ROLES: {
        TENANT_ADMIN: 'TENANT_ADMIN',
        TENANT_INTEGRATOR: 'TENANT_INTEGRATOR',
        TENANT_DEVELOPER: 'TENANT_DEVELOPER',
        TENANT_GUEST: 'TENANT_GUEST',
    },
    ENTITY: {
        TENANT: 'TENANT',
        USER: 'USER',
        INSTANCE: 'INSTANCE',
        TOKEN: 'TOKEN',
    },
    MONGODB_ERRORS: {
        '11000': 'DUPLICATE_KEY',
    },
    ERROR_CODES: {
        INPUT_INVALID: 'INPUT_INVALID',
        CONTEXT_REQUIRED: 'CONTEXT_REQUIRED',
        MISSING_PERMISSION: 'MISSING_PERMISSION',
        VALIDATION_ERROR: 'VALIDATION_ERROR',
        EMAIL_NOT_VALID: 'EMAIL_NOT_VALID',
        NOT_LOGGED_IN: 'NOT_LOGGED_IN',
        USER_NOT_FOUND: 'USER_NOT_FOUND',
        PASSWORD_INCORRECT: 'PASSWORD_INCORRECT',
        ENTITY_NOT_FOUND: 'ENTITY_NOT_FOUND',
        DUPLICATE_KEY: 'DUPLICATE_KEY',
        ENTITY_ALREADY_EXISTS: 'ENTITY_ALREADY_EXISTS',
        ENTITY_DISABLED: 'ENTITY_DISABLED',
        FORBIDDEN: 'FORBIDDEN',
        SESSION_EXPIRED: 'SESSION_EXPIRED',
        INVALID_HEADER: 'INVALID_HEADER',
        INVALID_TOKEN: 'INVALID_TOKEN',
        DEFAULT: 'UNKNOWN_ERROR',
    },
    AUTH_TYPES: {
        OIDC: 'OIDC',
        BASIC: 'BASIC',
    },

};
