db.sales.aggregate(
    [
        {
            $search:
            {
                index: 'sample-supplies-sales-dynamic'
            },
            'compound': {
                'filter': [
                    {
                        'text': {
                            'query': 'Online',
                            'path': 'purchaseMethod'
                        }
                    }
                ], 'should': [
                    {
                        'text': {
                            'query': 'notepad',
                            'path': 'items',
                            'score': { 'constant': { 'value': 5 } }
                        }
                    }
                ]
            }
        }

    ])




db.sales.aggregate([
    {
        $search: {
            index: 'sample_supplies-sales-dynamic',
            "compound": {
                "filter": [
                    {
                        "text": {
                            "query": "Online",
                            "path": "purchaseMethod"
                        }
                    }
                ],
                "should": [
                    {
                        "text": {
                            "query": "notepad",
                            "path": "items",
                            "score": { "constant": { "value": 5 } }
                        }
                    }
                ]
            }
        }
    }
])


/*$*/search {
    "compound": {
      "must": [{
        "text": {
          "query": "field",
          "path": "habitat"
        }
      }],
      "should": [{
        "range": {
          "gte": 45,
          "path": "wingspan_cm",
          "score": {"constant": {"value": 5}}
        }
      }]
    }
  }

  db.sales.aggregate([
    {
      $search: {
        index: 'sample_supplies-sales-dynamic',
        "compound": {
          "filter": [
            {
              "text": {
                "query": "Online",
                "path": "purchaseMethod"
              }
            }
          ],
          "should": [
            {
              "text": {
                "query": "notepad",
                "path": "items",
                "score": { "constant": {"value": 5} }
              }
            }
        ]
        }
      }
    }
  ])

  $searchMeta: {
    "facet": {
        "operator": {
            "text": {
            "query": ["Northern Cardinal"],
            "path": "common_name"
            }
        },
        "facets": {
            "sightingWeekFacet": {
                "type": "date",
                "path": "sighting",
                "boundaries": [ISODate("2022-01-01"), 
                    ISODate("2022-01-08"),
                    ISODate("2022-01-15"),
                    ISODate("2022-01-22")],
                "default" : "other"
            }
        }
    }
}

"facet" is an operator within $searchMeta.
"operator" refers to the search operator - the query itself. 
"facets" operator is where we put the definition of the buckets for the facets.

{
    "name": "sample_supplies-sales-facets",
    "searchAnalyzer": "lucene.standard",
    "analyzer": "lucene.standard",
    "collectionName": "sales",
    "database": "sample_supplies",
    "mappings": {
        "dynamic": true,
        "fields": {
        "purchaseMethod": [
            {
            "dynamic": true,
            "type": "document"
            },
            {
            "type": "string"
            }
        ],
        "storeLocation": [
            {
            "dynamic": true,
            "type": "document"
            },
            {
            "type": "stringFAcet"
            }
        ]
        }
    }
}


db.sales.aggregate([
    {
      $searchMeta: {
        index: 'sample_supplies-sales-facets',
          "facet": {
              "operator": {
                  "text": {
                      "query": ["In store"],
                      "path": "purchaseMethod"
                  }
              },
              "facets": {
                  "locationFacet": {
                      "type": "string",
                      "path": "storeLocation",
                  }
              }
          }
      }
    }
  ])

  const session = db.getMongo().startSession()

session.startTransaction()

const account = session.getDatabase('< add database name here>').getCollection('<add collection name here>')

//Add database operations like .updateOne() here

session.abortTransaction()

session.commitTransaction()

