import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ceylon-dots',
  styleUrl: 'ceylon-dots.scss',
  shadow: true,
})
export class CeylonDots {

  @Prop() animationType: string = 'pulse';

  render() {
    let classType = `dot-${this.animationType}`;
    return (
      <div class={classType}>
        <div class={`${classType}__left`}></div>
        <div class={`${classType}__right`}></div>
      </div>
    );
  }

}
