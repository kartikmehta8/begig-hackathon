function TodosHeader() {
    const date = new Date();
    const day = date.getDate();
    const weekDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ][date.getDay()];
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ][date.getMonth()];

    const enOrdinalRules = new Intl.PluralRules("en", { type: "ordinal" });
    const enOrdinalRulesMap = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th",
    };
    const enOrdinalSuffix = enOrdinalRulesMap[enOrdinalRules.select(day)];

    const getHeaderImageClass = (hour) => {
        if (hour >= 6 && hour < 16) {
            return "bg-todo-header-day";
        } else if (hour >= 16 && hour < 20) {
            return "bg-todo-header-afternoon";
        } else if (hour >= 20 || hour <= 5) {
            return "bg-todo-header-night";
        }
    };

    return (
        <header
            className={`${getHeaderImageClass(
                date.getHours()
            )} bg-cover bg-center border-b-1 border-gray-300 px-4 py-6`}
            data-testid="todos-header-bg"
        >
            <h1 className="text-2xl text-white" data-testid="calendar-date">
                {`${weekDay}, ${day}${enOrdinalSuffix}`}
            </h1>
            <p
                className="pt-1 text-lg text-gray-100"
                data-testid="calendar-month"
            >
                {month}
            </p>
        </header>
    );
}

export default TodosHeader;
