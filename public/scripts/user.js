import { renderBlock } from './lib';
export function renderUserBlock(favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="/img/avatar.png" alt="Wade Warren" />
      <div class="info">
          <p class="name">Wade Warren</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxPQUFPLENBQUE7QUFFakMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxtQkFBbUI7SUFDL0MsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQTtJQUNqRixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUUzRCxXQUFXLENBQ1AsWUFBWSxFQUNaOzs7Ozs7a0NBTTBCLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxnQkFBZ0I7Ozs7S0FJdkYsQ0FDQSxDQUFBO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVuZGVyQmxvY2t9IGZyb20gJy4vbGliJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrKGZhdm9yaXRlSXRlbXNBbW91bnQpIHtcbiAgICBjb25zdCBmYXZvcml0ZXNDYXB0aW9uID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA/IGZhdm9yaXRlSXRlbXNBbW91bnQgOiAn0L3QuNGH0LXQs9C+INC90LXRgidcbiAgICBjb25zdCBoYXNGYXZvcml0ZUl0ZW1zID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA/IHRydWUgOiBmYWxzZVxuXG4gICAgcmVuZGVyQmxvY2soXG4gICAgICAgICd1c2VyLWJsb2NrJyxcbiAgICAgICAgYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiL2ltZy9hdmF0YXIucG5nXCIgYWx0PVwiV2FkZSBXYXJyZW5cIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj5XYWRlIFdhcnJlbjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImZhdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1pY29uJHtoYXNGYXZvcml0ZUl0ZW1zID8gJyBhY3RpdmUnIDogJyd9XCI+PC9pPiR7ZmF2b3JpdGVzQ2FwdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgKVxufVxuIl19