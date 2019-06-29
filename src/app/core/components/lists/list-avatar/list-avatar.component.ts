import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListAvatar } from './list-avatar';

@Component({
  selector: 'app-list-avatar',
  templateUrl: './list-avatar.component.html',
  styleUrls: ['./list-avatar.component.scss']
})
export class ListAvatarComponent implements OnInit {
  @Input()
  data: Array<any>;
  @Input()
  listAvatar: ListAvatar;

  @Output()
  itemClickEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public itemEvent(itemId: string) {
    this.itemClickEmitter.emit(itemId);
  }
}
