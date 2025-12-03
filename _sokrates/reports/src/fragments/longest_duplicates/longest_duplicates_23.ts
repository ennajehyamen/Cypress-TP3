backend/transaction-routes.ts [46:59]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    );

    res.status(200);
    res.json({
      pageData: {
        page: res.locals.paginate.page,
        limit: res.locals.paginate.limit,
        hasNextPages: res.locals.paginate.hasNextPages(totalPages),
        totalPages,
      },
      results: paginatedItems,
    });
  }
);
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



backend/transaction-routes.ts [121:134]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    );

    res.status(200);
    res.json({
      pageData: {
        page: res.locals.paginate.page,
        limit: res.locals.paginate.limit,
        hasNextPages: res.locals.paginate.hasNextPages(totalPages),
        totalPages,
      },
      results: paginatedItems,
    });
  }
);
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



