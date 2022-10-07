# CustomMiniBlog

Projeto criado no curso React do Zero a Maestria (c/ hooks, router, API, Projetos) do Matheus Battisti.

O projeto consiste em criar um mini blog para postagens, usuário pode se cadastrar e postar, ainda existe um dashboard onde o usuário pode atualizar a postagem ou excluir a mesma.

O projeto do curso se Chama Mini Blog, porém eu renomeie para Custom Mini Blog pois decidi fazer algumas modificações.

Caso você esteja procurando um projeto de referência, não utilize esse devido as modificações que realizei, que são:

## Projeto Original / Minha modificação

* Criado com CRA / Criado com Vite
* Sem EsLint e Prettier / Com EsLint e Prettier
* Javascript / Typescript
* Inclusão de Tailwind (a intenção no início era utilizar, mas acabei desistindo e deixei configurado para caso eu queira incluir no futuro)

Utilizei o Typescript do jeito mais simples possível, como por exemplo utilizar a typagem any em vários lugares, fiz isso para acelerar o curso, a intenção era só localizar os bugs no momento da codificação e não focando em manutenção.

## Tecnologias

📁 Back-end: Firebase

🗄️ Banco de Dados: Firestore Database

🖥️ Front-end: ReactJs (Vite e Typescript)

### Executando a aplicação

Altere o arquivo `/src/firebase/config.ts` e coloque as configurações do seu firebase.

Execute `npm install` para baixar as dependências, e depois execute `npm start` para inicializar o projeto.

### Demonstração

**Tela de Login**
![LoginScreen](https://lh3.googleusercontent.com/pw/AL9nZEUfkNjXXkRSkSjXXVn0ENstYFHu-tudp1ln1qXWi1IunJ3eCZNz5LToN6p7fC_GO-WapeAbCP4W24Ln71QQY1rvKahCDCkKCLMGqsIjvfbvW5rv9-VPhHZB1PDZMpyMTd1b4tNEGHsh4SIAIdeQE8tX=w1890-h917-no?authuser=0)

**Tela de Cadastro**
![RegisterScreen](https://lh3.googleusercontent.com/pw/AL9nZEX3JY6UqKxEbfjruHy9_4-Gb7Xclmpl3n1Eo6Ee5zOzYdr55cIybiX0KnL9Wbcow_X9YT2tOWbwi6GsTUAYfU16CVf_N-yo5M5OO1DBcA7J9xvB1Ij0J6t690EwlHfgzKOXWpzKjcownd68qVr-ceHH=w1871-h927-no?authuser=0)

**Tela Criar Postagem**
![CreatePostScreen](https://lh3.googleusercontent.com/pw/AL9nZEXw_hh1sMML2QF1dcbXKP1yHFJGAxaMKLsFGUALhVfmzUP2EA4OKQHYUrb5dw4SG8YWd6WQG9UUeiiJABOFgYGePDIqSkrDauh4eRpDK_4C8108wRLWoUZCSKKXcmDxeHTE8bwmD8BKuG2SFBkVBMz4=w1867-h916-no?authuser=0)

**Tela Postagens**
![PostsScreen](https://lh3.googleusercontent.com/pw/AL9nZEVSZA4xSlYklKIUyotMx-KRYbU6s_6MH0G0QcjYGQNO6eqtXHdrlgYchc1KJY0NuJQmRxPDEkaQHSzg1357JCqZtg-K6B3wGRZnGrEd9-GJbpaKDS8iNGP-Qz6LNVLXSXwgL-2UsNGt3atP6lUdSVZT=w1583-h937-no?authuser=0)

**Tela Dashboard**
![DashboardScreen](https://lh3.googleusercontent.com/pw/AL9nZEVTtQhxbFORwS6zKKaO2NsZh1KkheohWtUwEWRYtUKLE-9-b2UibZuXgenihcibMcHT0kUSGHK4lRdBqu4Xu_7L3oyEup4BZ3b8_If0KqGA5XmDPIpa1vT7QHsGO9h3jlBgU67f0Dlc4_0dUMXXt8Q0=w1852-h901-no?authuser=0)
