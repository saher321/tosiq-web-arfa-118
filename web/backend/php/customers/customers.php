
<?php
include "./config/db.php";

$query = "select * from customers";

$result = mysqli_query($connection, $query)

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customers</title>

    <!-- css -->
    <?php include("./includes/top.php") ?>
</head>

<body class="bg-gray-50 text-gray-900 antialiased">

    <?php include("./includes/partials/app_name.php") ?>

    <main class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        <!-- Page Header -->
        <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 class="text-2xl font-semibold tracking-tight">
                    Customers
                </h1>
                <p class="mt-1 text-sm text-gray-500">
                    Manage and view all your customer information in one place.
                </p>
            </div>

            <a href="add_customer.php"
               class="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="h-4 w-4"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 4v16m8-8H4"/>
                </svg>
                Add Customer
            </a>
        </div>

        <!-- Customers Card -->
        <div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

            <!-- Search and Count -->
            <div class="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 class="text-base font-semibold">All Customers</h2>
                    <p class="mt-1 text-sm text-gray-500">
                        A list of your registered customers.
                    </p>
                </div>

                <div class="relative w-full sm:max-w-xs">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                         stroke-width="2">
                        <circle cx="11" cy="11" r="7"/>
                        <path stroke-linecap="round" d="m16 16 4 4"/>
                    </svg>

                    <input
                        type="search"
                        id="customerSearch"
                        placeholder="Search customers..."
                        class="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-100"
                    >
                </div>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="w-full text-left text-sm">
                    <thead class="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                        <tr>
                            <th class="px-6 py-4 font-medium">#</th>
                            <th class="px-6 py-4 font-medium">Customer</th>
                            <th class="px-6 py-4 font-medium">Email Address</th>
                            <th class="px-6 py-4 font-medium">Phone Number</th>
                            <th class="px-6 py-4 text-right font-medium">Actions</th>
                        </tr>
                    </thead>

                    <tbody id="customerTable" class="divide-y divide-gray-100">

                        <?php while($row = mysqli_fetch_assoc($result)){?>
                        <tr class="customer-row transition hover:bg-gray-50">
                            <td class="whitespace-nowrap px-6 py-4 text-gray-500"><?php echo $row['id']?></td>
                            <td class="whitespace-nowrap px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-600">
                                        U
                                    </div>
                                    <span class="font-medium text-gray-900"><?php echo $row['name']?></span>
                                </div>
                            </td>
                            <td class="whitespace-nowrap px-6 py-4 text-gray-500">
                                <?php echo $row['email']?>
                            </td>
                            <td class="whitespace-nowrap px-6 py-4 text-gray-500">
                                <?php echo $row['phone']?>
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                                <div class="flex justify-end gap-3">
                                    <a href="edit_customer.php?id=<?php echo $row["id"]?>"
                                       class="font-medium text-gray-700 hover:text-black">
                                        Edit
                                    </a>
                                    <a
                                    href="./scripts/delete.php?id=<?php echo $row["id"]?>"
                                    class="font-medium text-red-600 hover:text-red-700">
                                        Delete
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <?php }?>


                        <!-- Empty Search State -->
                        <tr id="emptyState" class="hidden">
                            <td colspan="5" class="px-6 py-12 text-center">
                                <p class="font-medium text-gray-900">No customers found</p>
                                <p class="mt-1 text-sm text-gray-500">
                                    Try searching with a different name, email, or phone.
                                </p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>

    </main>

    <!-- js -->
    <?php include("./includes/bottom.php")?>

</body>
</html>
