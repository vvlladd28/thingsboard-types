import { ChangeDetectorRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WidgetContext } from '@home/models/widget-component.models';
import { ContentType } from '@shared/models/constants';
import { ConnectorType, RPCCommand, RPCTemplate, RPCTemplateConfig } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { AttributeService } from '@core/http/attribute.service';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class GatewayServiceRPCComponent implements OnInit {
    private fb;
    private dialog;
    private utils;
    private cd;
    private attributeService;
    ctx: WidgetContext;
    contentTypes: typeof ContentType;
    resultTime: number | null;
    dialogRef: MatDialogRef<any>;
    commandForm: FormGroup;
    isConnector: boolean;
    RPCCommands: Array<string>;
    connectorType: ConnectorType;
    templates: Array<RPCTemplate>;
    readonly ConnectorType: typeof ConnectorType;
    readonly gatewayConnectorDefaultTypesTranslates: Map<ConnectorType, string>;
    readonly typesWithUpdatedParams: Set<ConnectorType>;
    private subscription;
    private subscriptionOptions;
    constructor(fb: FormBuilder, dialog: MatDialog, utils: UtilsService, cd: ChangeDetectorRef, attributeService: AttributeService);
    ngOnInit(): void;
    sendCommand(value?: RPCCommand): void;
    getCommandFromParamsByType(params: RPCTemplateConfig): any;
    saveTemplate(): void;
    useTemplate($event: any): void;
    private updateTemplates;
    private onDataUpdateError;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayServiceRPCComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayServiceRPCComponent, "tb-gateway-service-rpc", never, { "ctx": { "alias": "ctx"; "required": false; }; "dialogRef": { "alias": "dialogRef"; "required": false; }; }, {}, never, never, false, never>;
}
