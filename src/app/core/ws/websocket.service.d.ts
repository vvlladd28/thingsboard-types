import { CmdWrapper, WsService, WsSubscriber } from '@shared/models/websocket/websocket.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AuthService } from '@core/auth/auth.service';
import { NgZone } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { AuthWsCmd, CmdUpdateMsg, NotificationSubscriber, TelemetrySubscriber, WebsocketDataMsg } from '@shared/models/telemetry/telemetry.models';
import Timeout = NodeJS.Timeout;
export declare abstract class WebsocketService<T extends WsSubscriber> implements WsService<T> {
    protected store: Store<AppState>;
    protected authService: AuthService;
    protected ngZone: NgZone;
    protected apiEndpoint: string;
    protected cmdWrapper: CmdWrapper;
    protected window: Window;
    isActive: boolean;
    isOpening: boolean;
    isOpened: boolean;
    isReconnect: boolean;
    socketCloseTimer: Timeout;
    reconnectTimer: Timeout;
    lastCmdId: number;
    subscribersCount: number;
    subscribersMap: Map<number, TelemetrySubscriber | NotificationSubscriber>;
    reconnectSubscribers: Set<WsSubscriber>;
    wsUri: string;
    dataStream: WebSocketSubject<CmdWrapper | CmdUpdateMsg | AuthWsCmd>;
    errorName: string;
    protected constructor(store: Store<AppState>, authService: AuthService, ngZone: NgZone, apiEndpoint: string, cmdWrapper: CmdWrapper, window: Window);
    abstract subscribe(subscriber: WsSubscriber): any;
    abstract update(subscriber: T): any;
    abstract unsubscribe(subscriber: T): any;
    abstract processOnMessage(message: WebsocketDataMsg): any;
    protected nextCmdId(): number;
    protected publishCommands(): void;
    private checkToClose;
    private reset;
    private closeSocket;
    private tryOpenSocket;
    private openSocket;
    private onOpen;
    private onMessage;
    private onError;
    private onClose;
    private showWsError;
}
