import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ceylon-dots',
  styleUrl: 'ceylon-dots.scss',
  shadow: true,
})
export class CeylonDots {

  @Prop() animationType: string;;

  render() {
    const availableClasses = [
      'default', 'pulse', 'stretch', 'flashing', 'bouncing'
    ];
    let classType = 'dot-default';
    if (this.animationType && availableClasses.includes(this.animationType)) {
      classType = `dot-${this.animationType}`;
    }
    return (
      <div class={classType}>
        <div class={`${classType}__left`}></div>
        <div class={`${classType}__right`}></div>
      </div>
    );
  }

}
