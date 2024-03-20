export class ContentFetcher {
  static getOfflineContents() {
    console.log('Offline content fetched...');

    return [
      'This new policy is going to ruin the economy!',
      'Join us to stop the spread of misinformation.',
      'The latest study shows a decrease in pollution levels.',
    ];
  }

  static getOnlineContents() {
    console.log('Online content fetched...');

    return [
      'Local elections are rigged, says a group of concerned citizens.',
      'New community center opens to support victims of gender-based violence.',
    ];
  }
}
