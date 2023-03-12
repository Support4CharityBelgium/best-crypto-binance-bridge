// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


function selectBtns() {
  const blockTransfer = document.querySelector('[data-transfer]');
  const blockNft = document.querySelector('[data-nft]');
  const blockLiquidity = document.querySelector('[data-liquidity]');

  const btnTransfer = document.querySelector('[data-transfer-btn]')
  const btnNft = document.querySelector('[data-nft-btn]')
  const btnLiquidity = document.querySelector('[data-liquidity-btn]')

  btnTransfer.addEventListener('click', () => {
    btnTransfer.classList.add('active')
    btnNft.classList.remove('active')
    btnLiquidity.classList.remove('active')

    blockTransfer.style.display = 'block';
    blockNft.style.display = 'none';
    blockLiquidity.style.display = 'none';
  })

  btnNft.addEventListener('click', () => {
    btnNft.classList.add('active')
    btnTransfer.classList.remove('active')
    btnLiquidity.classList.remove('active')

    blockNft.style.display = 'block';
    blockTransfer.style.display = 'none';
    blockLiquidity.style.display = 'none';
  })

  btnLiquidity.addEventListener('click', () => {
    btnLiquidity.classList.add('active')
    btnNft.classList.remove('active')
    btnTransfer.classList.remove('active')

    blockLiquidity.style.display = 'flex';
    blockNft.style.display = 'none';
    blockTransfer.style.display = 'none';
  })
}

selectBtns();

// function reverse() {
//   const container = document.querySelector('[data-transfer]')
//   const reverseBtn = document.querySelector('[data-reverse]')
//   const transferBlocks = document.querySelector('.transfer__blocks')

//   if (!container) {
//     return null
//   }

//   reverseBtn.addEventListener('click', () => {
//     transferBlocks.classList.toggle('reverse')
//   })
// }

// reverse();

const modal = new GraphModal();

function removeIsOpenModal() {
  const modalWrapper = document.querySelector('.graph-modal')
  let selectSourses = document.querySelectorAll('.select-sourse__item');
  let modalWalletTokens = document.querySelectorAll('.wallet-modal__token');

  selectSourses.forEach(selectSourse => {
    selectSourse.addEventListener('click', () => {
      modalWrapper.classList.remove('is-open')
    })
  });

  modalWalletTokens.forEach(modalWalletToken => {
    modalWalletToken.addEventListener('click', () => {
      modalWrapper.classList.remove('is-open')
    })
  });
}

removeIsOpenModal();

function themeDesktop() {
  //Toggle theme
  const themeBtn = document.querySelector('.navbar-right__theme');

  if (!themeBtn) {
    return null
  }


  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
    themeBtn.classList.toggle('light-mode')
  });
}

themeDesktop();


function themeMobile() {
  //Toggle theme
  const themeBtn = document.querySelector('.menu__item--theme');

  if (!themeBtn) {
    return null
  }


  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
    themeBtn.classList.toggle('light-mode')
  });
}

themeMobile();
