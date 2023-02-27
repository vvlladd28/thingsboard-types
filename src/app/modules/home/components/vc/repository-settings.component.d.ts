import { ChangeDetectorRef, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AdminService } from '@core/http/admin.service';
import { RepositorySettings, RepositoryAuthMethod } from '@shared/models/settings.models';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export declare class RepositorySettingsComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private adminService;
    private dialogService;
    private translate;
    private cd;
    fb: UntypedFormBuilder;
    detailsMode: boolean;
    popoverComponent: TbPopoverComponent;
    repositorySettingsForm: UntypedFormGroup;
    settings: RepositorySettings;
    repositoryAuthMethod: typeof RepositoryAuthMethod;
    repositoryAuthMethods: RepositoryAuthMethod[];
    repositoryAuthMethodTranslations: Map<RepositoryAuthMethod, string>;
    showChangePassword: boolean;
    changePassword: boolean;
    showChangePrivateKeyPassword: boolean;
    changePrivateKeyPassword: boolean;
    constructor(store: Store<AppState>, adminService: AdminService, dialogService: DialogService, translate: TranslateService, cd: ChangeDetectorRef, fb: UntypedFormBuilder);
    ngOnInit(): void;
    checkAccess(): void;
    save(): void;
    delete(formDirective: FormGroupDirective): void;
    changePasswordChanged(): void;
    changePrivateKeyPasswordChanged(): void;
    updateValidators(emitEvent?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RepositorySettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RepositorySettingsComponent, "tb-repository-settings", never, { "detailsMode": "detailsMode"; "popoverComponent": "popoverComponent"; }, {}, never, never, false, never>;
}
