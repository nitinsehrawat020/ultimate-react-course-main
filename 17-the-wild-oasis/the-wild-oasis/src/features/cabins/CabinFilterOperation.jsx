import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinFilterOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name(A-Z)" },
          { value: "name-desc", label: "Sort by name(Z-A)" },
          { value: "RegularPrice-asc", label: "Sort by price(Low first)" },
          { value: "RegularPrice-desc", label: "Sort by price(High first)" },
          { value: "maxCapacity-asc", label: "Sort by capacity(low first)" },
          {
            value: "maxCapacity-desc",
            label: "Sort by capacity(high first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinFilterOperation;
