import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntityDataInfo, VersionLoadResult } from '@shared/models/vc.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntitiesVersionControlService } from '@core/http/entities-version-control.service';
import { EntityId } from '@shared/models/id/entity-id';
import { TranslateService } from '@ngx-translate/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class EntityVersionRestoreComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private entitiesVersionControlService;
    private cd;
    private translate;
    private sanitizer;
    private fb;
    versionName: string;
    versionId: string;
    externalEntityId: EntityId;
    onClose: (result: VersionLoadResult | null) => void;
    popoverComponent: TbPopoverComponent;
    entityDataInfo: EntityDataInfo;
    restoreFormGroup: UntypedFormGroup;
    errorMessage: SafeHtml;
    versionLoadResult$: Observable<VersionLoadResult>;
    private versionLoadResultSubscription;
    constructor(store: Store<AppState>, entitiesVersionControlService: EntitiesVersionControlService, cd: ChangeDetectorRef, translate: TranslateService, sanitizer: DomSanitizer, fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    cancel(): void;
    restore(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityVersionRestoreComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityVersionRestoreComponent, "tb-entity-version-restore", never, { "versionName": { "alias": "versionName"; "required": false; }; "versionId": { "alias": "versionId"; "required": false; }; "externalEntityId": { "alias": "externalEntityId"; "required": false; }; "onClose": { "alias": "onClose"; "required": false; }; "popoverComponent": { "alias": "popoverComponent"; "required": false; }; }, {}, never, never, false, never>;
}
