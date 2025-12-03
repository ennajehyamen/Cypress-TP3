src/components/TransactionContactsList.tsx [32:42]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  useEffect(() => {
    send("FETCH", { ...dateRangeFilters, ...amountRangeFilters });
  }, [send, dateRangeFilters, amountRangeFilters]);

  const loadNextPage = (page: number) =>
    send("FETCH", { page, ...dateRangeFilters, ...amountRangeFilters });

  return (
    <>
      <TransactionList
        filterComponent={filterComponent}
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



src/components/TransactionPersonalList.tsx [32:42]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  useEffect(() => {
    send("FETCH", { ...dateRangeFilters, ...amountRangeFilters });
  }, [send, dateRangeFilters, amountRangeFilters]);

  const loadNextPage = (page: number) =>
    send("FETCH", { page, ...dateRangeFilters, ...amountRangeFilters });

  return (
    <>
      <TransactionList
        filterComponent={filterComponent}
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



