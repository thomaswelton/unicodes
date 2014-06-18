.unicodes:before {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
{{#data}}

.unicodes-{{name}}:before {
  content: '{{code}}';
}
{{/data}}
