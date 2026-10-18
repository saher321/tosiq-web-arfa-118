
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Customer</title>

    <!-- css -->
    <?php include("./includes/top.php") ?>
</head>

<body class="bg-gray-50 text-gray-900 antialiased">

    <?php include("./includes/partials/app_name.php") ?>

    <main class="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

        <!-- Page Header -->
        <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 class="text-2xl font-semibold tracking-tight">
                    Add Customer
                </h1>
                <p class="mt-1 text-sm text-gray-500">
                    Create a new customer profile by entering their details.
                </p>
            </div>

            <a href="customers.php"
               class="inline-flex items-center justify-center rounded-lg border border-gray-200
                      bg-white px-4 py-2.5 text-sm font-medium text-gray-700
                      transition hover:bg-gray-100 focus:outline-none focus:ring-2
                      focus:ring-gray-300">
                View All
            </a>
        </div>

        <!-- Customer Form -->
        <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

            <form action="./scripts/add.php" method="POST" class="space-y-6">

                <!-- Full Name -->
                <div>
                    <label for="name"
                           class="mb-2 block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter customer name"
                        autocomplete="name"
                        required
                        class="w-full rounded-lg border border-gray-200 bg-white px-4 py-3
                               text-sm outline-none transition placeholder:text-gray-400
                               focus:border-gray-900 focus:ring-2 focus:ring-gray-100"
                    >
                </div>

                <!-- Email -->
                <div>
                    <label for="email"
                           class="mb-2 block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        autocomplete="email"
                        required
                        class="w-full rounded-lg border border-gray-200 bg-white px-4 py-3
                               text-sm outline-none transition placeholder:text-gray-400
                               focus:border-gray-900 focus:ring-2 focus:ring-gray-100"
                    >
                </div>

                <!-- Phone -->
                <div>
                    <label for="phone"
                           class="mb-2 block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                        autocomplete="tel"
                        required
                        class="w-full rounded-lg border border-gray-200 bg-white px-4 py-3
                               text-sm outline-none transition placeholder:text-gray-400
                               focus:border-gray-900 focus:ring-2 focus:ring-gray-100"
                    >
                </div>

                <!-- Actions -->
                <div class="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
                    <button
                        type="reset"
                        class="rounded-lg border border-gray-200 px-5 py-2.5
                               text-sm font-medium text-gray-600 transition
                               hover:bg-gray-50">
                        Reset
                    </button>

                    <button
                        type="submit"
                        class="rounded-lg bg-gray-900 px-5 py-2.5 text-sm
                               font-medium text-white transition hover:bg-gray-700
                               focus:outline-none focus:ring-2 focus:ring-gray-400
                               focus:ring-offset-2">
                        Save Customer
                    </button>
                </div>

            </form>
        </div>

    </main>

</body>
</html>
