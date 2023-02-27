import { AfterViewInit, ChangeDetectorRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, Injector, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { PopoverPlacement } from '@shared/components/popover.models';
import { AnimationBuilder } from '@angular/animations';
import * as i0 from "@angular/core";
export declare type TbPopoverTrigger = 'click' | 'focus' | 'hover' | null;
export declare class TbPopoverDirective implements OnChanges, OnDestroy, AfterViewInit {
    private elementRef;
    private hostView;
    private resolver;
    private renderer;
    content?: string | TemplateRef<void>;
    trigger?: TbPopoverTrigger;
    placement?: string | string[];
    origin?: ElementRef<HTMLElement>;
    visible?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    overlayClassName?: string;
    overlayStyle?: {
        [klass: string]: any;
    };
    tbPopoverBackdrop: boolean;
    readonly visibleChange: EventEmitter<boolean>;
    componentFactory: ComponentFactory<TbPopoverComponent>;
    component?: TbPopoverComponent;
    private readonly destroy$;
    private readonly triggerDisposables;
    private delayTimer?;
    private internalVisible;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    updatePosition(): void;
    private createComponent;
    private registerTriggers;
    private updatePropertiesByChanges;
    private updatePropertiesByKeys;
    private initProperties;
    private updateComponentValue;
    private delayEnterLeave;
    private removeTriggerListeners;
    private clearTogglingTimer;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbPopoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TbPopoverDirective, "[tb-popover]", ["tbPopover"], { "content": "tbPopoverContent"; "trigger": "tbPopoverTrigger"; "placement": "tbPopoverPlacement"; "origin": "tbPopoverOrigin"; "visible": "tbPopoverVisible"; "mouseEnterDelay": "tbPopoverMouseEnterDelay"; "mouseLeaveDelay": "tbPopoverMouseLeaveDelay"; "overlayClassName": "tbPopoverOverlayClassName"; "overlayStyle": "tbPopoverOverlayStyle"; "tbPopoverBackdrop": "tbPopoverBackdrop"; }, { "visibleChange": "tbPopoverVisibleChange"; }, never, never, false, never>;
}
export declare class TbPopoverComponent implements OnDestroy, OnInit {
    cdr: ChangeDetectorRef;
    private renderer;
    private animationBuilder;
    private directionality;
    overlay: CdkConnectedOverlay;
    popoverRoot: ElementRef<HTMLElement>;
    popover: ElementRef<HTMLElement>;
    tbContent: string | TemplateRef<void> | null;
    tbComponentFactory: ComponentFactory<any> | null;
    tbComponentRef: ComponentRef<any> | null;
    tbComponentContext: any;
    tbComponentInjector: Injector | null;
    tbComponentStyle: {
        [klass: string]: any;
    };
    tbOverlayClassName: string;
    tbOverlayStyle: {
        [klass: string]: any;
    };
    tbPopoverInnerStyle: {
        [klass: string]: any;
    };
    tbBackdrop: boolean;
    tbMouseEnterDelay?: number;
    tbMouseLeaveDelay?: number;
    tbHideOnClickOutside: boolean;
    tbShowCloseButton: boolean;
    tbAnimationState: string;
    tbVisibleChange: Subject<boolean>;
    tbAnimationDone: Subject<void>;
    tbComponentChange: Subject<ComponentRef<any>>;
    tbDestroy: Subject<void>;
    set tbVisible(value: boolean);
    get tbVisible(): boolean;
    visible: boolean;
    set tbHidden(value: boolean);
    get tbHidden(): boolean;
    hidden: boolean;
    lastIsIntersecting: boolean;
    set tbTrigger(value: TbPopoverTrigger);
    get tbTrigger(): TbPopoverTrigger;
    protected trigger: TbPopoverTrigger;
    set tbPlacement(value: PopoverPlacement | PopoverPlacement[]);
    get hasBackdrop(): boolean;
    preferredPlacement: PopoverPlacement;
    origin: CdkOverlayOrigin;
    dir: Direction;
    classMap: {
        [klass: string]: any;
    };
    positions: ConnectionPositionPair[];
    private parentScrollSubscription;
    private intersectionObserver;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, animationBuilder: AnimationBuilder, directionality: Directionality);
    ngOnInit(): void;
    ngOnDestroy(): void;
    closeButtonClick($event: Event): void;
    show(): void;
    hide(): void;
    updateByDirective(): void;
    resize(width: string, height: string, animationDurationMs?: number): void;
    private setSize;
    updatePosition(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    updateStyles(): void;
    setOverlayOrigin(origin: CdkOverlayOrigin): void;
    onClickOutside(event: MouseEvent): void;
    onComponentChange(component: ComponentRef<any>): void;
    animationDone(): void;
    private isTopOverlay;
    private updateVisibilityByContent;
    private isEmpty;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbPopoverComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbPopoverComponent, "tb-popover", ["tbPopoverComponent"], {}, {}, never, never, false, never>;
}
