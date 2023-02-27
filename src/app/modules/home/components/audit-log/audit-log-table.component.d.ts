import { OnInit } from '@angular/core';
import { AuditLogService } from '@core/http/audit-log.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AuditLogMode } from '@shared/models/audit-log.models';
import { EntityId } from '@shared/models/id/entity-id';
import { UserId } from '@shared/models/id/user-id';
import { CustomerId } from '@shared/models/id/customer-id';
import { AuditLogTableConfig } from '@home/components/audit-log/audit-log-table-config';
import { EntitiesTableComponent } from '@home/components/entity/entities-table.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ActivatedRoute } from '@angular/router';
import * as i0 from "@angular/core";
export declare class AuditLogTableComponent implements OnInit {
    private auditLogService;
    private translate;
    private datePipe;
    private dialog;
    private store;
    private route;
    auditLogMode: AuditLogMode;
    detailsMode: boolean;
    activeValue: boolean;
    dirtyValue: boolean;
    entityIdValue: EntityId;
    userIdValue: UserId;
    customerIdValue: CustomerId;
    set active(active: boolean);
    set entityId(entityId: EntityId);
    set userId(userId: UserId);
    set customerId(customerId: CustomerId);
    entitiesTable: EntitiesTableComponent;
    auditLogTableConfig: AuditLogTableConfig;
    constructor(auditLogService: AuditLogService, translate: TranslateService, datePipe: DatePipe, dialog: MatDialog, store: Store<AppState>, route: ActivatedRoute);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuditLogTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuditLogTableComponent, "tb-audit-log-table", never, { "auditLogMode": "auditLogMode"; "detailsMode": "detailsMode"; "active": "active"; "entityId": "entityId"; "userId": "userId"; "customerId": "customerId"; }, {}, never, never, false, never>;
}
