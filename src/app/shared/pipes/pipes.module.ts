import {NgModule} from '@angular/core';
import {
    ConferenceIDPipe, ConferenceNamePipe,
    ConferencePipe,
    ConferenceRankPipe, DivisionAbbreviationPipe, DivisionIDPipe, DivisionNamePipe, DivisionNameShortPipe, DivisionPipe,
    DivisionRankPipe,
    GoalsAgainstPipe, LeagueIdentifierIDPipe, LeagueIdentifierNamePipe, LeagueIdentifierPipe,
    LeagueRankPipe,
    LeagueRecordLossesPipe, LeagueRecordOTPipe, LeagueRecordWinsPipe, PlayerIDPipe, PlayerNamePipe, PlayerPositionPipe,
    PointsPipe, StandingsPipe, StreakCodePipe, StreakNumberPipe, StreakTypePipe, TeamDivisionNamePipe, TeamNamePipe
} from './standings/standings.pipe';
import {HyphenatePipe} from './hyphenate.pipe';

@NgModule({
    declarations: [
        ConferencePipe,
        ConferenceIDPipe,
        ConferenceNamePipe,
        ConferenceRankPipe,
        DivisionPipe,
        DivisionAbbreviationPipe,
        DivisionIDPipe,
        DivisionNamePipe,
        DivisionNameShortPipe,
        DivisionRankPipe,
        HyphenatePipe,
        GoalsAgainstPipe,
        LeagueIdentifierIDPipe,
        LeagueIdentifierNamePipe,
        LeagueIdentifierPipe,
        LeagueRankPipe,
        LeagueRecordWinsPipe,
        LeagueRecordLossesPipe,
        LeagueRecordOTPipe,
        PlayerIDPipe,
        PlayerNamePipe,
        PlayerPositionPipe,
        PointsPipe,
        StandingsPipe,
        StreakTypePipe,
        StreakNumberPipe,
        StreakCodePipe,
        TeamDivisionNamePipe,
        TeamNamePipe],
    exports: [
        ConferencePipe,
        ConferenceIDPipe,
        ConferenceNamePipe,
        ConferenceRankPipe,
        DivisionPipe,
        DivisionAbbreviationPipe,
        DivisionIDPipe,
        DivisionNamePipe,
        DivisionNameShortPipe,
        DivisionRankPipe,
        HyphenatePipe,
        GoalsAgainstPipe,
        LeagueIdentifierIDPipe,
        LeagueIdentifierNamePipe,
        LeagueIdentifierPipe,
        LeagueRankPipe,
        LeagueRecordWinsPipe,
        LeagueRecordLossesPipe,
        LeagueRecordOTPipe,
        PlayerIDPipe,
        PlayerNamePipe,
        PlayerPositionPipe,
        PointsPipe,
        StandingsPipe,
        StreakTypePipe,
        StreakNumberPipe,
        StreakCodePipe,
        TeamDivisionNamePipe,
        TeamNamePipe],
})
export class PipesModule {
}
