//--------------------------------------------------------------
// Unicode Variables
//--------------------------------------------------------------

{{#data}}
@unicodes-{{name}}: '{{code}}';
{{/data}}

//--------------------------------------------------------------
// Unicode Mixins
//--------------------------------------------------------------

.unicodes() {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

{{#data}}
.unicodes-{{name}}() {
  &:extend(.unicodes);
  content: @unicodes-{{name}};
}
{{/data}}

//--------------------------------------------------------------
// Unicode Classes
//--------------------------------------------------------------

{{#data}}
.unicodes-{{name}}:before {
  .unicodes-{{name}}();
}
{{/data}}
