backend/transaction-routes.ts [42:62]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    const { totalPages, data: paginatedItems } = getPaginatedItems(
      req.query.page as unknown as number,
      req.query.limit as unknown as number,
      transactions
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

//GET /transactions/contacts - scoped user, auth-required
router.get(
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



backend/transaction-routes.ts [74:94]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    const { totalPages, data: paginatedItems } = getPaginatedItems(
      req.query.page as unknown as number,
      req.query.limit as unknown as number,
      transactions
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

//GET /transactions/public - auth-required
router.get(
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



