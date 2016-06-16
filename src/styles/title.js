const csjs = require('csjs');

module.exports = csjs`
.title,
.subtitle {
  font-weight: 300;
  word-break: break-word;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

.title em,
.title span,
.subtitle em,
.subtitle span {
  font-weight: 300;
}

.title a:hover,
.subtitle a:hover {
  border-bottom: 1px solid;
}

.title strong,
.subtitle strong {
  font-weight: 500;
}

.title .tag,
.subtitle .tag {
  vertical-align: bottom;
}

.title {
  color: #222324;
  font-size: 28px;
  line-height: 1;
}

.title code {
  display: inline-block;
  font-size: 28px;
}

.title strong {
  color: inherit;
}

.title + .highlight {
  margin-top: -10px;
}

.title + .subtitle {
  margin-top: -10px;
}

.title.is-1 {
  font-size: 48px;
}

.title.is-1 code {
  font-size: 40px;
}

.title.is-2 {
  font-size: 40px;
}

.title.is-2 code {
  font-size: 28px;
}

.title.is-3 {
  font-size: 28px;
}

.title.is-3 code {
  font-size: 24px;
}

.title.is-4 {
  font-size: 24px;
}

.title.is-4 code {
  font-size: 18px;
}

.title.is-5 {
  font-size: 18px;
}

.title.is-5 code {
  font-size: 14px;
}

.title.is-6 {
  font-size: 14px;
}

.title.is-6 code {
  font-size: 14px;
}

.title.is-normal {
  font-weight: 400;
}

.title.is-normal strong {
  font-weight: 700;
}

@media screen and (min-width: 769px) {
  .title + .subtitle {
    margin-top: -15px;
  }
}

.subtitle {
  color: #69707a;
  font-size: 18px;
  line-height: 1.125;
}

.subtitle code {
  border-radius: 3px;
  display: inline-block;
  font-size: 14px;
  padding: 2px 3px;
  vertical-align: top;
}

.subtitle strong {
  color: #222324;
}

.subtitle + .title {
  margin-top: -20px;
}

.subtitle.is-1 {
  font-size: 48px;
}

.subtitle.is-1 code {
  font-size: 40px;
}

.subtitle.is-2 {
  font-size: 40px;
}

.subtitle.is-2 code {
  font-size: 28px;
}

.subtitle.is-3 {
  font-size: 28px;
}

.subtitle.is-3 code {
  font-size: 24px;
}

.subtitle.is-4 {
  font-size: 24px;
}

.subtitle.is-4 code {
  font-size: 18px;
}

.subtitle.is-5 {
  font-size: 18px;
}

.subtitle.is-5 code {
  font-size: 14px;
}

.subtitle.is-6 {
  font-size: 14px;
}

.subtitle.is-6 code {
  font-size: 14px;
}

.subtitle.is-normal {
  font-weight: 400;
}

.subtitle.is-normal strong {
  font-weight: 700;
}

.title:not(:last-child) {
  margin-bottom: 20px;
}
`;
