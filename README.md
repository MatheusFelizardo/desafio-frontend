<p align="center">
	  <img src="https://user-images.githubusercontent.com/63763269/94968823-fc29a700-04d7-11eb-8dbb-2b04906eeef0.png" width="180px" height="80px"/></p>
</div>

<h2 align="center">Imobiliária Inforce</h2>

___



<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
</h3>

___

![imobiliaria](https://user-images.githubusercontent.com/63763269/94968778-ea480400-04d7-11eb-879f-78417101b6ef.png)

## :information_source: Sobre

Desafio: O nosso cliente "Imobiliária Inforce" solicitou a criação de um novo site para a empresa e precisa ter um profissional especialista para realizar esta tarefa. Para ajudar o desenvolvedor nesse trabalho, disponibilizamos algumas APIs com as informações necessárias para o desenvolvimento do site e um WIREFRAME com o modelo de como nosso cliente (“Imobiliária Inforce”) quer o site dele.

## :interrobang: Motivo

Projeto criado para participação do processo na empresa Inforce.

## :scream: Maiores Dificuldades

Criação do slider no banner do zero, criação do carousel para as noticias e noticias, consumo da api no direto no frontend.

Motivo das dificuldade: A unica vez que tinha feito um slider/carousel foi usando o bootstrap e somente tinha consumido os dados da API pelo backend, onde eu utilizo a template engine Nunjucks para mostrar os dados no front. 
Soluções: 
- Para o slider do banner: encontrei uma mini lib chamada GlideJs e fiz o uso dela, o problema é que acredito que ela só possa ser usada com uma configuração por página, então não consegui utilizar no carousel.

- Carousel vitrines e noticias: Como não consegui utilizar o GlideJS, eu criei uma div (carousel-content) com overflow:hidden, dentro dela criei uma outra div com flex-wrap: nowrap e coloquei nela 3000px de widht e ela que se move com o translateX, depois disso criei uma ul pra receber os dados da API.
	
- Sobre a API: Consegui obter os dados da API mas nunca tinha mostrado esse resultado direto pelo front, então a solução que criei foi fazer um forEach com  os dados, criei uma variável com o HTML pré formatado, já passando os dados vindos da API e depois de um innerHTML na ul criada para receber os dados.

## :seedling: Requisitos Mínimos

- Navegador web (Testado no Google Chrome)



## :rocket: Tecnologias Utilizadas 

O projeto foi desenvolvido utilizando as seguintes tecnologias

- HTML
- CSS
- Javascript

