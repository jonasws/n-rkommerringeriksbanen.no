module Main exposing (main)

import Browser
import Html exposing (Html, div, h1, i, text)
import Html.Attributes exposing (class, style)
import Time



-- MODEL


type alias Model =
    Int


type Msg
    = Tick Time.Posix


init : Int -> ( Model, Cmd Msg )
init diffSeconds =
    ( diffSeconds, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Time.every 1000 Tick


type alias DateDiff =
    { years : Int
    , days : Int
    , hours : Int
    , minutes : Int
    , seconds : Int
    }


secondsPerMinute : Int
secondsPerMinute =
    60


secondsPerHour : Int
secondsPerHour =
    60 * secondsPerMinute


secondsPerDay : Int
secondsPerDay =
    24 * secondsPerHour


secondsPerYear : Int
secondsPerYear =
    365 * secondsPerDay


secondsToDateDiff : Int -> DateDiff
secondsToDateDiff diffSeconds =
    let
        ( years, remainingDays ) =
            divideWithRemainder diffSeconds secondsPerYear

        ( days, remainingHours ) =
            divideWithRemainder remainingDays secondsPerDay

        ( hours, remainingMinutes ) =
            divideWithRemainder remainingHours secondsPerHour

        ( minutes, remainingSeconds ) =
            divideWithRemainder remainingMinutes secondsPerMinute
    in
    DateDiff years days hours minutes remainingSeconds


dateDiffToString : DateDiff -> String
dateDiffToString { years, days, hours, minutes, seconds } =
    let
        dateFragmentStrings =
            [ pluralizeIfNeeded "år" "år" years
            , pluralizeIfNeeded "dag" "dager" days
            , pluralizeIfNeeded "time" "timer" hours
            , pluralizeIfNeeded "minutt" "minutter" minutes
            , pluralizeIfNeeded "sekund" "sekunder" seconds
            ]
    in
    joinStringFragmentsHumanReadable "og" dateFragmentStrings


joinStringFragmentsHumanReadable : String -> List String -> String
joinStringFragmentsHumanReadable finalSeparator fragments =
    let
        reversedFragments =
            fragments
                |> List.filter (\fragment -> not <| String.isEmpty fragment)
                |> List.reverse
    in
    case reversedFragments of
        lastFragment :: restFragments ->
            if List.length restFragments > 0 then
                let
                    joinedFragments =
                        restFragments
                            |> List.reverse
                            |> String.join ", "
                in
                joinedFragments ++ " " ++ finalSeparator ++ " " ++ lastFragment

            else
                lastFragment

        [] ->
            ""


pluralizeIfNeeded : String -> String -> Int -> String
pluralizeIfNeeded baseForm pluralForm numberOfUnits =
    if numberOfUnits == 0 then
        ""

    else if numberOfUnits == 1 then
        "1 " ++ baseForm

    else
        String.fromInt numberOfUnits ++ " " ++ pluralForm


divideWithRemainder : Int -> Int -> ( Int, Int )
divideWithRemainder number1 number2 =
    let
        result =
            toFloat number1 / toFloat number2

        remainder =
            remainderBy number2 number1
    in
    ( floor result, remainder )


formatDiffMessage : String -> String
formatDiffMessage diffString =
    diffString ++ " til byggestart "


viewIcon : String -> Html Msg
viewIcon iconName =
    let
        iconClass =
            "em-" ++ iconName
    in
    i
        [ class <| "em-svg " ++ iconClass
        , style "margin-right" "0.5em"
        ]
        []


view : Model -> Html Msg
view remainingTime =
    div [ class "vh-100 flex justify-center items-center" ]
        [ h1 [ class "f3 f1-ns ph3 ph1-ns tc light-yellow" ]
            [ remainingTime
                |> secondsToDateDiff
                |> dateDiffToString
                |> formatDiffMessage
                |> text
            , viewIcon "bullettrain_side"
            , viewIcon "smile"
            , viewIcon "railway_car"
            ]
        ]


update : Msg -> Model -> ( Model, Cmd Msg )
update _ remainingTime =
    ( remainingTime - 1
    , Cmd.none
    )


main : Program Int Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
