import { BaseData } from './base-data';
import { UserId } from './id/user-id';
import { CustomerId } from './id/customer-id';
import { Authority } from './authority.enum';
import { TenantId } from './id/tenant-id';
import { HasTenantId } from '@shared/models/entity.models';
export interface User extends BaseData<UserId>, HasTenantId {
    tenantId: TenantId;
    customerId: CustomerId;
    email: string;
    phone: string;
    authority: Authority;
    firstName: string;
    lastName: string;
    additionalInfo: Partial<UserAdditionalInfo>;
}
export interface UserAdditionalInfo {
    userCredentialsEnabled: boolean;
    userActivated: boolean;
    description: string;
    defaultDashboardId: string;
    defaultDashboardFullscreen: boolean;
    homeDashboardId: string;
    homeDashboardHideToolbar: boolean;
    lang: string;
    [key: string]: any;
}
export declare enum ActivationMethod {
    DISPLAY_ACTIVATION_LINK = "DISPLAY_ACTIVATION_LINK",
    SEND_ACTIVATION_MAIL = "SEND_ACTIVATION_MAIL"
}
export declare const activationMethodTranslations: Map<ActivationMethod, string>;
export interface ActivationLinkInfo {
    value: string;
    ttlMs: number;
}
export interface AuthUser {
    sub: string;
    scopes: string[];
    userId: string;
    firstName: string;
    lastName: string;
    enabled: boolean;
    tenantId: string;
    customerId: string;
    isPublic: boolean;
    authority: Authority;
}
export interface UserEmailInfo {
    id: UserId;
    email: string;
    firstName: string;
    lastName: string;
}
