(() => {
  const abas = document.querySelectorAll("[data-aba]");

  inativarAbas = () => {
    abas.forEach((aba) => aba.classList.remove("main__ativo-index"));
  };
  ativarAbas = (aba) => {
    aba.classList.add("main__ativo-index");
  };
  abas.forEach((aba) =>
    aba.addEventListener("click", () => {
      inativarAbas();
      ativarAbas(aba);
    })
  );
})();
(() => {
  const abas = document.querySelectorAll("[data-aba]");

  inativarAbas = () => {
    abas.forEach((aba) => aba.classList.remove("header__ativo"));
  };
  ativarAbas = (aba) => {
    aba.classList.add("header__ativo");
  };
  abas.forEach((aba) =>
    aba.addEventListener("click", () => {
      inativarAbas();
      ativarAbas(aba);
    })
  );
})();
(() => {
  const btnModal = document.querySelector("[data-btn]");
  btnModal.addEventListener("click", () => {
    abrirModal();
    fecharModal();
    limparForm();
  });

  const limparForm = () => {
    const form = document.querySelector("[data-form]");
    form.reset();
  };

  const abrirModal = () => {
    const modal = document.querySelector("[data-modal]");
    modal.classList.add("main__modal-show");
  };

  const fecharModal = () => {
    const close = document.querySelector("[data-close]");
    const modal = document.querySelector("[data-modal]");
    close.addEventListener("click", () => {
      modal.classList.remove("main__modal-show");
    });
  };
})();