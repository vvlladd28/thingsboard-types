import { OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminSettings, MailConfigTemplate, MailServerOauth2Provider, MailServerSettings, SmtpProtocol } from '@shared/models/settings.models';
import { AdminService } from '@core/http/admin.service';
import { TranslateService } from '@ngx-translate/core';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { DomainSchema } from '@shared/models/oauth2.models';
import { AuthService } from '@core/auth/auth.service';
import { MatChipInputEvent } from '@angular/material/chips';
import * as i0 from "@angular/core";
export declare class MailServerComponent extends PageComponent implements OnInit, OnDestroy, HasConfirmForm {
    protected store: Store<AppState>;
    private router;
    private route;
    private adminService;
    private authService;
    private translate;
    fb: FormBuilder;
    private window;
    adminSettings: AdminSettings<MailServerSettings>;
    smtpProtocols: SmtpProtocol[];
    showChangePassword: boolean;
    protocols: (DomainSchema.HTTP | DomainSchema.HTTPS)[];
    domainSchemaTranslations: Map<DomainSchema, string>;
    mailServerOauth2Provider: typeof MailServerOauth2Provider;
    tlsVersions: string[];
    helpLink: string;
    templates: Map<string, MailConfigTemplate>;
    templateProvider: string[];
    readonly separatorKeysCodes: number[];
    private destroy$;
    private DOMAIN_AND_PORT_REGEXP;
    private URL_REGEXP;
    private loginProcessingUrl;
    mailSettings: FormGroup<{
        mailFrom: import("@angular/forms").FormControl<string>;
        smtpProtocol: import("@angular/forms").FormControl<SmtpProtocol>;
        smtpHost: import("@angular/forms").FormControl<string>;
        smtpPort: import("@angular/forms").FormControl<number>;
        timeout: import("@angular/forms").FormControl<number>;
        enableTls: import("@angular/forms").FormControl<boolean>;
        tlsVersion: import("@angular/forms").FormControl<any>;
        enableProxy: import("@angular/forms").FormControl<boolean>;
        proxyHost: import("@angular/forms").FormControl<string>;
        proxyPort: import("@angular/forms").FormControl<any>;
        proxyUser: import("@angular/forms").FormControl<string>;
        proxyPassword: import("@angular/forms").FormControl<string>;
        username: import("@angular/forms").FormControl<string>;
        changePassword: import("@angular/forms").FormControl<boolean>;
        password: import("@angular/forms").FormControl<string>;
        enableOauth2: import("@angular/forms").FormControl<boolean>;
        providerId: import("@angular/forms").FormControl<string>;
        clientId: import("@angular/forms").FormControl<string>;
        clientSecret: import("@angular/forms").FormControl<string>;
        providerTenantId: import("@angular/forms").FormControl<string>;
        authUri: import("@angular/forms").FormControl<string>;
        tokenUri: import("@angular/forms").FormControl<string>;
        scope: import("@angular/forms").FormControl<any>;
        redirectUri: import("@angular/forms").FormControl<string>;
    }>;
    private defaultConfiguration;
    domainForm: FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        scheme: import("@angular/forms").FormControl<DomainSchema>;
    }>;
    constructor(store: Store<AppState>, router: Router, route: ActivatedRoute, adminService: AdminService, authService: AuthService, translate: TranslateService, fb: FormBuilder, window: Window);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private initTemplates;
    private mailServerSettingsForm;
    private domainFormConfiguration;
    private enableOauth2;
    private enableProviderTenantIdChanged;
    private enableProxyChanged;
    private enableMailPassword;
    private enableTls;
    sendTestMail(): void;
    save(): void;
    generateAccessToken(): void;
    redirectURI(schema?: DomainSchema, name?: string): string;
    private parseUrl;
    get accessTokenButtonName(): string;
    get accessTokenStatus(): string;
    confirmForm(): FormGroup;
    private get mailSettingsFormValue();
    trackByParams(index: number): number;
    removeScope(i: number): void;
    addScope(event: MatChipInputEvent): void;
    toggleEditMode(path: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MailServerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MailServerComponent, "tb-mail-server", never, {}, {}, never, never, false, never>;
}
