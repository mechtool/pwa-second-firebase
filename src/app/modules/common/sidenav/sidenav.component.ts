import {Component, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { SideNavItem } from '../../../services/mainAppService';

@Component({
  selector: 'pwa-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent{

  constructor(private changeDetector : ChangeDetectorRef) { }

    @Input() public menuItems : SideNavItem[];

    onClickMenu(event) {
        let that = this, img, height,  parent, target = this.getTarget(event.target,'menuItem'), current = event.currentTarget;
        if(target instanceof HTMLAnchorElement){
            if(target.classList.contains('group')){
                img = target.querySelector('.pwa-icon-menu');
                current.classList.toggle('active');
                setSvgMatIcon(that.menuItems, img.dataset.text, current.classList.contains('active') ? 'sort' : 'remove');
                current.style.height = current.classList.contains('active') ? (current.children.length * 48)+'px' : closeChildren(current) ;
                //открытие/закрытие родительского блока с элементами
                if(parent = this.getTarget(current.parentElement, 'ct')){
                    height = parseInt(window.getComputedStyle(parent).height);
                    parent.style.height = (height + (current.classList.contains('active') ? (current.childElementCount - 1) * 48 : - (current.childElementCount - 1) * 48))+'px';
                }


            }
        }
        event.stopPropagation();

        function closeChildren(current) {
            Array.prototype.forEach.call(current.querySelectorAll('.ct'), (ch => {
                 if(ch.classList.contains('active')){
                     setSvgMatIcon(that.menuItems, ch.querySelector('.pwa-icon-menu').dataset.text, 'remove') ;
                     ch.style.height = '48px';
                     ch.classList.remove('active');
                }
            }));
            return '48px';
        }

        function setSvgMatIcon(menuItems, text, icon) {
            menuItems.forEach(item => {
                if(item.children){
                    setSvgMatIcon(item.children, text, icon)
                }
                 item.text == text && (item.icon = icon);
            }) ;
            that.changeDetector.detectChanges();
        }
    }
    getTarget(elem, selector){
        if(elem.classList.contains(selector)) return elem;
        else if(elem.classList.contains('sideNavBlock')) return null;
        else return this.getTarget(elem.parentElement, selector);
    }



}
