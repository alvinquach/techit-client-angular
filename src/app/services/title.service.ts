import { Injectable, EventEmitter } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable()
export class TitleService extends Title {

    private _baseTitle: string;

    private _titleChangePublisher: EventEmitter<string> = new EventEmitter<string>();
    
    setTitle(newTitle: string): void {
        this._baseTitle = newTitle;
        super.setTitle(`Techit - ${this._baseTitle}`);
        this._titleChangePublisher.emit(newTitle);
    }

    getBasetitle(): string {
        return this._baseTitle;
    }

    get onTitleChange(): EventEmitter<string> {
        return this._titleChangePublisher;
    }

}