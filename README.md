# 🕒 Analog Watch — Relógio Analógico e Digital

Projeto de um relógio analógico e digital desenvolvido utilizando **HTML5, CSS3 e JavaScript puro**, sem bibliotecas, frameworks ou dependências externas.

O objetivo do projeto é praticar conceitos fundamentais de JavaScript, como manipulação do DOM, utilização do objeto `Date`, operações matemáticas e atualização dinâmica de elementos HTML.
<img width="1350" height="856" alt="image" src="https://github.com/user-attachments/assets/febfe72d-b7ee-443b-88bc-8486eb29d22a" />


## 🚀 Funcionalidades

- Exibição da hora atual do dispositivo.
- Relógio analógico com ponteiros de horas, minutos e segundos.
- Relógio digital no formato `HH:MM:SS`.
- Atualização automática a cada segundo.
- Sincronização entre os relógios analógico e digital.
- Interface estilizada inteiramente com CSS.

## 🛠️ Tecnologias utilizadas

- **HTML5:** estruturação dos elementos do relógio.
- **CSS3:** estilização, posicionamento e transformações dos ponteiros.
- **JavaScript:** manipulação do DOM, obtenção da hora atual e atualização dos relógios.

## ⚙️ Como funciona?

O JavaScript utiliza o objeto `Date` para obter as horas, os minutos e os segundos do dispositivo.

```javascript
const date = new Date();

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
```

A posição dos ponteiros é calculada matematicamente, considerando que uma volta completa possui **360 graus**.

| Ponteiro | Cálculo | Explicação |
|---|---|---|
| Segundos | `seconds * 6` | Cada segundo representa 6°. |
| Minutos | `minutes * 6` | Cada minuto representa 6°. |
| Horas | `(hours % 12) * 30 + minutes * 0.5` | Cada hora representa 30°, com ajuste pelos minutos. |

Como os ponteiros foram construídos horizontalmente, adiciona-se um deslocamento de `270°` para alinhar a posição inicial às 12 horas.

A atualização é executada automaticamente a cada segundo utilizando `setInterval()`.

```javascript
setInterval(updatedigital, 1000);
```

## 📂 Estrutura do projeto

```text
analog-watch/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 💻 Como executar

1. Clone o repositório:

```bash
git clone https://github.com/Gabriel-s-pereira/analog-watch.git
```

2. Acesse o diretório:

```bash
cd analog-watch
```

3. Abra o arquivo `index.html` no navegador.

**Não é necessária a instalação de dependências ou a configuração de um servidor.**

## 📚 Conceitos praticados

- Manipulação do DOM.
- Utilização do objeto `Date`.
- Formatação de valores com `toString()` e `padStart()`.
- Operações matemáticas para cálculo de ângulos.
- Manipulação de estilos CSS pelo JavaScript.
- Atualizações periódicas com `setInterval()`.
- Posicionamento e transformação de elementos utilizando CSS.

## 👨‍💻 Autor

**Gabriel Pereira**

GitHub: [@Gabriel-s-pereira](https://github.com/Gabriel-s-pereira)

---

Projeto desenvolvido para fins de estudo e aprimoramento das habilidades em desenvolvimento web.
