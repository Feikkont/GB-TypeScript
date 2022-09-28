import {renderBlock} from './lib.js'

export function renderUserBlock(userName: string, avatarLink: string, favoriteItemsAmount: number) {
    // const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
    // const hasFavoriteItems = favoriteItemsAmount ? true : false
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 0;
    const hasFavoriteItems = favoriteItemsAmount ? true : false
    // const items: number | string = favoritesCaption > 0 ? favoritesCaption : 'ничего нет'
    const items: number | string = Boolean(favoriteItemsAmount) ? favoriteItemsAmount : 'ничего нет'

    renderBlock(
        'user-block',
        `
    <div class="header-container">
      <img class="avatar" src="${avatarLink}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
<!--            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${items}-->
            <i class="heart-icon${Boolean(favoriteItemsAmount) ? ' active' : ''}"></i>${items}

          </p>
      </div>
    </div>
    `
    )
}
