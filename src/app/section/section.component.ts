import { Component, HostBinding, Input } from '@angular/core'
import { coerceBooleanProperty } from '@angular/cdk/coercion'

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() title: string
  @Input() image: string
  @Input() mode: 'horizontal' | 'vertical' = 'horizontal'

  private _reverse: boolean

  get reverse(): boolean {
    return this._reverse
  }

  @Input()
  set reverse(value: boolean) {
    this._reverse = coerceBooleanProperty(value)
  }

  @HostBinding('style.flex-flow')
  get flexFlow(): string {
    return (
      (this.mode === 'horizontal' ? 'row' : 'column') +
      (this.mode === 'horizontal' && this.reverse ? '-reverse' : '') +
      ' nowrap'
    )
  }
}
