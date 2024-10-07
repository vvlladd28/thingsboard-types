import { ChangeDetectorRef, OnInit, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EntityId } from '@shared/models/id/entity-id';
import { EntitiesTableComponent } from '@home/components/entity/entities-table.component';
import { DialogService } from '@core/services/dialog.service';
import { AlarmTableConfig } from './alarm-table-config';
import { AlarmsMode } from '@shared/models/alarm.models';
import { AlarmService } from '@app/core/http/alarm.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Overlay } from '@angular/cdk/overlay';
import { UtilsService } from '@core/services/utils.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityService } from '@core/http/entity.service';
import * as i0 from "@angular/core";
export declare class AlarmTableComponent implements OnInit {
    private alarmService;
    private entityService;
    private dialogService;
    private translate;
    private datePipe;
    private dialog;
    private store;
    private overlay;
    private viewContainerRef;
    private cd;
    private utilsService;
    private route;
    private router;
    activeValue: boolean;
    dirtyValue: boolean;
    entityIdValue: EntityId;
    alarmsMode: AlarmsMode;
    detailsMode: boolean;
    set active(active: boolean);
    set entityId(entityId: EntityId);
    entitiesTable: EntitiesTableComponent;
    alarmTableConfig: AlarmTableConfig;
    constructor(alarmService: AlarmService, entityService: EntityService, dialogService: DialogService, translate: TranslateService, datePipe: DatePipe, dialog: MatDialog, store: Store<AppState>, overlay: Overlay, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef, utilsService: UtilsService, route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmTableComponent, "tb-alarm-table", never, { "active": { "alias": "active"; "required": false; }; "entityId": { "alias": "entityId"; "required": false; }; }, {}, never, never, false, never>;
}
