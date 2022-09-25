import { renderSearchFormBlock } from './search-form';
import { renderSearchStubBlock } from './search-results';
import { renderUserBlock } from './user';
import { renderToast } from './lib';
window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock('0');
    renderSearchFormBlock();
    renderSearchStubBlock();
    renderToast({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, {
        name: 'Понял', handler: () => {
            console.log('Уведомление закрыто');
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZUFBZSxDQUFBO0FBQ25ELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGtCQUFrQixDQUFBO0FBQ3RELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxRQUFRLENBQUE7QUFDdEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLE9BQU8sQ0FBQTtBQUVqQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQzdDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQixxQkFBcUIsRUFBRSxDQUFBO0lBQ3ZCLHFCQUFxQixFQUFFLENBQUE7SUFDdkIsV0FBVyxDQUNQLEVBQUMsSUFBSSxFQUFFLDJEQUEyRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFDcEY7UUFDSSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ3RDLENBQUM7S0FDSixDQUNKLENBQUE7QUFDTCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVuZGVyU2VhcmNoRm9ybUJsb2NrfSBmcm9tICcuL3NlYXJjaC1mb3JtJ1xuaW1wb3J0IHtyZW5kZXJTZWFyY2hTdHViQmxvY2t9IGZyb20gJy4vc2VhcmNoLXJlc3VsdHMnXG5pbXBvcnQge3JlbmRlclVzZXJCbG9ja30gZnJvbSAnLi91c2VyJ1xuaW1wb3J0IHtyZW5kZXJUb2FzdH0gZnJvbSAnLi9saWInXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHJlbmRlclVzZXJCbG9jaygnMCcpXG4gICAgcmVuZGVyU2VhcmNoRm9ybUJsb2NrKClcbiAgICByZW5kZXJTZWFyY2hTdHViQmxvY2soKVxuICAgIHJlbmRlclRvYXN0KFxuICAgICAgICB7dGV4dDogJ9Ct0YLQviDQv9GA0LjQvNC10YAg0YPQstC10LTQvtC80LvQtdC90LjRjy4g0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQtdCz0L4g0L/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4JywgdHlwZTogJ3N1Y2Nlc3MnfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ9Cf0L7QvdGP0LsnLCBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cj0LLQtdC00L7QvNC70LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKVxufSlcbiJdfQ==