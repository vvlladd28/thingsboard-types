import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { AliasEntityType, EntityType } from '@shared/models/entity-type.models';
import { EntityService } from '@core/http/entity.service';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipGrid } from '@angular/material/chips';
import { FloatLabelType, MatFormFieldAppearance, SubscriptSizing } from '@angular/material/form-field';
import * as i0 from "@angular/core";
interface EntityTypeInfo {
    name: string;
    value: EntityType;
}
export declare class EntityTypeListComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private store;
    translate: TranslateService;
    private entityService;
    private fb;
    entityTypeListFormGroup: FormGroup;
    modelValue: Array<EntityType> | null;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    additionalClasses: Array<string>;
    appearance: MatFormFieldAppearance;
    label: string;
    floatLabel: FloatLabelType;
    disabled: boolean;
    subscriptSizing: SubscriptSizing;
    allowedEntityTypes: Array<EntityType | AliasEntityType>;
    emptyInputPlaceholder: string;
    filledInputPlaceholder: string;
    ignoreAuthorityFilter: boolean;
    entityTypeInput: ElementRef<HTMLInputElement>;
    entityTypeAutocomplete: MatAutocomplete;
    chipList: MatChipGrid;
    allEntityTypeList: Array<EntityTypeInfo>;
    entityTypeList: Array<EntityTypeInfo>;
    filteredEntityTypeList: Observable<Array<EntityTypeInfo>>;
    placeholder: string;
    secondaryPlaceholder: string;
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, entityService: EntityService, fb: FormBuilder);
    updateValidators(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<EntityType> | null): void;
    add(entityType: EntityTypeInfo): void;
    remove(entityType: EntityTypeInfo): void;
    displayEntityTypeFn(entityType?: EntityTypeInfo): string | undefined;
    fetchEntityTypes(searchText?: string): Observable<Array<EntityTypeInfo>>;
    onFocus(): void;
    clear(value?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityTypeListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityTypeListComponent, "tb-entity-type-list", never, { "required": { "alias": "required"; "required": false; }; "additionalClasses": { "alias": "additionalClasses"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "label": { "alias": "label"; "required": false; }; "floatLabel": { "alias": "floatLabel"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "subscriptSizing": { "alias": "subscriptSizing"; "required": false; }; "allowedEntityTypes": { "alias": "allowedEntityTypes"; "required": false; }; "emptyInputPlaceholder": { "alias": "emptyInputPlaceholder"; "required": false; }; "filledInputPlaceholder": { "alias": "filledInputPlaceholder"; "required": false; }; "ignoreAuthorityFilter": { "alias": "ignoreAuthorityFilter"; "required": false; }; }, {}, never, ["[matSuffix]"], false, never>;
}
export {};
