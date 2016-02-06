# Bouncer
An out-of-the-box list filter value converter for Aurelia. Bouncer makes it easy to hook up your application's filter controls to any list. For example:
  - tags you can filter by, e.g. "aurelia" "template"
  - a text box, e.g. "matt davis"
  - date boxes, e.g. "before 2016-01-01", "after 2015-09-01"

# Filter a simple list 

Pass in a search term and it will filter the list for matches.

## example input / output
- `"dark"` -> `["Dark Cloud", "Dark Cloud 2", "Dark Souls", "Dark Souls 2"]`
- `"dark souls"` -> `["Dark Souls", "Dark Souls 2"]`

## example implementation
`array | filter: { value: searchTerm }`

# Filter a list of objects

If your list contains objects, you can also pass in a list of properties to search on, such as in the name example, and it will search for matches in any of the properties. 

## example input / output
- `"matt"` -> `[{ first: "matt", last: "davis" }, { first: "john", last: "matthews" }, { first: "davis", last: "matthews" }]`
- `"matt davis"` -> `[{ first: "matt", last: "davis" }, { first: "davis", last: "matthews" }]`

## example implementation
`array | filter: { properties: ["first","last"], value: textInput }`

# Filter with multiple search terms

You can pass in a list of search terms, such as in the tags example, and it will search for matches on all of the search terms.

## example input / output
- `["aurelia"]` -> `{ name: "sentry", tags: ["aurelia", "template"] } and { name: "sass", tags: ["aurelia", "sass"] }`
- `["aurelia", "template"]` -> `{ name: "sentry", tags: ["aurelia", "template"] }`

## example implementation
`array | filter: { properties: ["tags"], value: tags }`

# Specify filter functions

If your properties don't contain simple strings, you can also specify the filter function, such as in the date example, to gain total control over how your filters are applied.
	
## example input / output 
- `"< 2015-10-01" && ">= 2015-09-25"` -> `[{ date: "2015-09-28", title: "aurelia-dot-net-1" }, { date: "2015-09-29", title: "sentry" }]`

## example implementation
`array | filter: { properties: ["date"], value: startDate, mode: ">=" } | filter { properties: ["date"], value: endDate, mode: "<" }`
