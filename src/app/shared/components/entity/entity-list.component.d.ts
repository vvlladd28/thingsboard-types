import { AfterViewInit, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { BaseData } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityService } from '@core/http/entity.service';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipGrid } from '@angular/material/chips';
import * as i0 from "@angular/core";
export declare class EntityListComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges {
    private store;
    translate: TranslateService;
    private entityService;
    private fb;
    entityListFormGroup: UntypedFormGroup;
    modelValue: Array<string> | null;
    entityType: EntityType;
    subType: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    entityInput: ElementRef<HTMLInputElement>;
    matAutocomplete: MatAutocomplete;
    chipList: MatChipGrid;
    entities: Array<BaseData<EntityId>>;
    filteredEntities: Observable<Array<BaseData<EntityId>>>;
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, entityService: EntityService, fb: UntypedFormBuilder);
    updateValidators(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<string> | null): void;
    reset(): void;
    add(entity: BaseData<EntityId>): void;
    remove(entity: BaseData<EntityId>): void;
    displayEntityFn(entity?: BaseData<EntityId>): string | undefined;
    fetchEntities(searchText?: string): Observable<Array<BaseData<EntityId>>>;
    onFocus(): void;
    clear(value?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityListComponent, "tb-entity-list", never, { "entityType": "entityType"; "subType": "subType"; "required": "required"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
