# Bouncer
An out-of-the-box list filter value converter for Aurelia. Bouncer makes it easy to hook up controls to filter any list in Aurelia.

# Filter a simple list 
Pass in a search term and it will filter the list for matches.

## example input / output
```json
"dark": ["Dark Cloud", "Dark Cloud 2", "Dark Souls", "Dark Souls 2"]
"dark souls": ["Dark Souls", "Dark Souls 2"]
```

## example implementation
`array | filter: { value: searchTerm }`

# Filter a list of objects
If your list contains objects, you can also pass in a list of properties to search on and it will search for matches in any of the properties. 

## example input / output
```
"matt": [{ first: "matt", last: "davis" }, { first: "john", last: "matthews" }, { first: "davis", last: "matthews" }]
"matt davis": [{ first: "matt", last: "davis" }, { first: "davis", last: "matthews" }]
```

## example implementation
`array | filter: { on: ["first","last"], value: textInput }`

# Filter with multiple search terms
You can pass in a list of search terms, such as in the tags example, and it will search for matches on all of the search terms.

## example input / output
```json
["aurelia"]: [{ name: "sentry", tags: ["aurelia", "template"] }, { name: "sass", tags: ["aurelia", "sass"] }]
["aurelia", "template"]: [{ name: "sentry", tags: ["aurelia", "template"] }]
```

## example implementation
`array | filter: { on: ["tags"], value: tags }`

# Specify filter functions
If your properties don't contain simple strings you can also specify the filter function to gain total control over how your filters are applied. Several common functions are provided out of the box, though custom functions can also be used.
	
## example input / output 
```json
"< 2015-10-01" && ">= 2015-09-25": [{ date: "2015-09-28", title: "aurelia-dot-net-1" }, { date: "2015-09-29", title: "sentry" }]
```

## example implementation
`array | filter: { on: ["date"], value: startDate, mode: ">=" } | filter { on: ["date"], value: endDate, mode: "<" }`

# Documentation
## Installation via systemjs
Bouncer can be installed by downloading it and placing it within your project, ideally in a "components" folder. To use it, you must require it into your view with `<require from="path/to/bouncer"></require>`.

You can also install bouncer via the command line with `jspm install github:foursails/bouncer`. Then require bouncer in any page by adding `<require from="bouncer"></require>`.

## array | filter: { on: properties }
Specifies the field(s) from the list objects on which to search. If multiple fields are passed, then matches on at least one property is considered a match.

*properties* (void|string|string[])
- void: If no argument is given, the list object is used. This is useful when a list contains only strings.
- string: If a single string is given, then matches are tested against that object property. 
- string[]: If an array of strings is given, then matches are tested against each of the object properties, and a match on at least one of the properties will include the object in the list.

## array | filter: { value: searchTerm, strict: strictMode, update: searchTerm.length }
Specifies the value(s) to test each list object against to determine matches. If multiple search terms are passed, then a list object must match **all** search terms to be considered a match; if `strict` is set to `false`, then a list object must match **one** search term to be considered a match. If multiple search terms are passed, `update` must be set to `searchTerm.length`.

*searchTerm* (string|string[])
- string: If a single string is given, then that string is used to determine matches.
- string[]: If a list of strings are given, then all strings are used to determine matches.

*strictMode* (boolean = true)
- boolean: If `true` or if no argument is passed, then a list object must match **all** search terms to be considered a match; if `false`, then a list object must match **one** search term to be considered a match.

*update* (searchTerm.length)
- searchTerm.length: **Must** be defined if `searchTerm` is an array. This forces Aurelia to subscribe to changes to the array.

## array | filter: { mode: operation }
Specifies the operation to use when determining matches. All string comparison is case invariant. The default behavior is string containment.

*operation* (void|string|(searchTerm, listObject): boolean)
- void: If no argument is passed, string containment, or `'contains'` is used.
- string: Must be one of the following predefined search operations:
  - 'exact': Matches identical strings, ignoring casing.
  - 'startsWith': Matches strings starting with the search term, ignoring casing.
  - 'endsWith': Matches strings ending with the search term, ignoring casing.
  - 'contains': Matches strings containing the search term, ignoring casing.
  - '>=': Matches properties that evaluate to >= searchTerm in JavaScript.
  - '>': Matches properties that evaluate to > searchTerm in JavaScript.
  - '<=': Matches properties that evaluate to <= searchTerm in JavaScript.
  - '<': Matches properties that evaluate to < searchTerm in JavaScript.
  - '==': Matches properties that evaluate to == searchTerm in JavaScript.
- (searchTerm, listObject): boolean: If a function is passed, then it is applied to the searchTerm and each list object. If it returns true, the list object is considered a match.


