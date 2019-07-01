import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListAvatar } from './list-avatar';

@Component({
  selector: 'app-list-avatar',
  templateUrl: './list-avatar.component.html',
  styleUrls: ['./list-avatar.component.scss']
})
export class ListAvatarComponent implements OnInit {
  private buttonsOptionsShow = false;
  @Input()
  data: Array<any>;
  @Input()
  listAvatar: ListAvatar;

  @Output()
  itemClickEmitter: EventEmitter<string> = new EventEmitter();
  itemEditEmitter: EventEmitter<string> = new EventEmitter();
  itemDeleteEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public itemEvent(itemId: string): void {
    this.itemClickEmitter.emit(itemId);
  }

  public itemEditEvent(itemId: string): void {
    this.itemEditEmitter.emit(itemId);
  }

  public itemDeleteEvent(itemId: string): void {
    this.itemDeleteEmitter.emit(itemId);
  }

  public showButtonOptions(): void {
    this.buttonsOptionsShow = true;
  }
}
