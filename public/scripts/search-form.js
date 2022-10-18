import { renderBlock } from './lib.js';
import { renderSearchResult } from './helpers.js';
const convertDate = (date) => {
    const convertedDate = date.toLocaleDateString().split('.');
    return convertedDate[2] + "-" + convertedDate[1] + "-" + convertedDate[0];
};
// const searchBtn = document.getElementById('search-button')
// searchBtn.onclick = () => {
//   renderSearchResult(formHandler())
// }
function formHandler() {
    const inputInDate = document.getElementById('check-in-date');
    const inputOutDate = document.getElementById('check-out-date');
    const inputPrice = document.getElementById('max-price');
    return {
        checkInDate: inputInDate.value,
        checkOutDate: inputOutDate.value,
        price: +inputPrice.value
    };
}
export function renderSearchFormBlock() {
    const date = new Date();
    const currentDate = convertDate(date);
    const outDate = convertDate(new Date(date.getTime() + (1000 * 60 * 60 * 24 * 2)));
    const nextMonth = date.getMonth() + 2;
    const lastDayInNextMonth = convertDate(new Date(date.getFullYear(), nextMonth, 0));
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${currentDate} min=${currentDate} max=${lastDayInNextMonth} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${outDate} min=${currentDate} max=${lastDayInNextMonth} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button id="search-button">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
    const searchBtn = document.getElementById('search-button');
    searchBtn.onclick = (event) => {
        event.preventDefault();
        renderSearchResult(formHandler());
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFVBQVUsQ0FBQTtBQUVwQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFaEQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFVLEVBQVUsRUFBRTtJQUN6QyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDMUQsT0FBTyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVFLENBQUMsQ0FBQTtBQUVELDZEQUE2RDtBQUM3RCw4QkFBOEI7QUFDOUIsc0NBQXNDO0FBQ3RDLElBQUk7QUFFSixTQUFTLFdBQVc7SUFDbEIsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQXFCLENBQUM7SUFDakYsTUFBTSxZQUFZLEdBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBcUIsQ0FBQztJQUNsRixNQUFNLFVBQVUsR0FBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBcUIsQ0FBQztJQUUzRSxPQUFPO1FBQ0wsV0FBVyxFQUFFLFdBQVcsQ0FBQyxLQUFLO1FBQzlCLFlBQVksRUFBRSxZQUFZLENBQUMsS0FBSztRQUNoQyxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSztLQUN6QixDQUFBO0FBQ0gsQ0FBQztBQUdELE1BQU0sVUFBVSxxQkFBcUI7SUFDbkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN4QixNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNyQyxNQUFNLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkYsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBaUJzRCxXQUFXLFFBQVEsV0FBVyxRQUFRLGtCQUFrQjs7OzsyREFJdkQsT0FBTyxRQUFRLFdBQVcsUUFBUSxrQkFBa0I7Ozs7Ozs7Ozs7OztLQVkxRyxDQUNGLENBQUE7SUFDRCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzFELFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtRQUNwQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtJQUNuQyxDQUFDLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyZW5kZXJCbG9ja30gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQge1NlYXJjaEZvcm1EYXRhfSBmcm9tIFwiLi9pbnRlcmZlY2VzXCI7XG5pbXBvcnQge3JlbmRlclNlYXJjaFJlc3VsdH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY29uc3QgY29udmVydERhdGUgPSAoZGF0ZTogRGF0ZSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGNvbnZlcnRlZERhdGUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpLnNwbGl0KCcuJylcbiAgcmV0dXJuIGNvbnZlcnRlZERhdGVbMl0gKyBcIi1cIiArIGNvbnZlcnRlZERhdGVbMV0gKyBcIi1cIiArIGNvbnZlcnRlZERhdGVbMF07XG59XG5cbi8vIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJylcbi8vIHNlYXJjaEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuLy8gICByZW5kZXJTZWFyY2hSZXN1bHQoZm9ybUhhbmRsZXIoKSlcbi8vIH1cblxuZnVuY3Rpb24gZm9ybUhhbmRsZXIoKTogU2VhcmNoRm9ybURhdGEge1xuICBjb25zdCBpbnB1dEluRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVjay1pbi1kYXRlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgaW5wdXRPdXREYXRlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2stb3V0LWRhdGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBpbnB1dFByaWNlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4LXByaWNlJykgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICByZXR1cm4ge1xuICAgIGNoZWNrSW5EYXRlOiBpbnB1dEluRGF0ZS52YWx1ZSxcbiAgICBjaGVja091dERhdGU6IGlucHV0T3V0RGF0ZS52YWx1ZSxcbiAgICBwcmljZTogK2lucHV0UHJpY2UudmFsdWVcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2soKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IGNvbnZlcnREYXRlKGRhdGUpO1xuICBjb25zdCBvdXREYXRlID0gY29udmVydERhdGUobmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDIpKSk7XG4gIGNvbnN0IG5leHRNb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDJcbiAgY29uc3QgbGFzdERheUluTmV4dE1vbnRoID0gY29udmVydERhdGUobmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBuZXh0TW9udGgsIDApKTtcblxuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLWZvcm0tYmxvY2snLFxuICAgIGBcbiAgICA8Zm9ybT5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT0ke2N1cnJlbnREYXRlfSBtaW49JHtjdXJyZW50RGF0ZX0gbWF4PSR7bGFzdERheUluTmV4dE1vbnRofSBuYW1lPVwiY2hlY2tpblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1vdXQtZGF0ZVwiPtCU0LDRgtCwINCy0YvQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1vdXQtZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9JHtvdXREYXRlfSBtaW49JHtjdXJyZW50RGF0ZX0gbWF4PSR7bGFzdERheUluTmV4dE1vbnRofSBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uIGlkPVwic2VhcmNoLWJ1dHRvblwiPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gIClcbiAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idXR0b24nKVxuICBzZWFyY2hCdG4ub25jbGljayA9IChldmVudCA6IEV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHJlbmRlclNlYXJjaFJlc3VsdChmb3JtSGFuZGxlcigpKVxuICB9XG59XG4iXX0=