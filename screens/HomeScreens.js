/* eslint-disable quotes */
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ArrowDownTrayIcon,
  Bars3CenterLeftIcon,
  BellIcon,
} from 'react-native-heroicons/solid';
import {storeColors} from '../theme/StoreColors';
import GradientButton from '../components/GradientButton';
import GameCard from '../components/GameCard';
const categories = [
  'Action',
  'Adventure',
  'Arcade',
  'Board Game',
  'Card Game',
  'Car',
  'Educational',
  'Family',
  'Fantasy',
  'Musical',
  'print',
  'Role-Playing',
  'Simulation',
  'Sports',
  'Strategy',
  'Trivia',
  'Word',
  'Puzzle',
];
const feature = [
  {
    id: 1,
    title: 'Zooba',
    image: require('../assets/images/zooba.png'),
    downloads: '200k',
    stars: 4,
  },
  {
    id: 2,
    title: 'Subway Surfer',
    image: require('../assets/images/subway.png'),
    downloads: '5M',
    stars: 4,
  },
  {
    id: 3,
    title: 'Free Fire',
    image: require('../assets/images/freeFire.png'),
    downloads: '100M',
    stars: 3,
  },
  {
    id: 4,
    title: "Alto's Adventure",
    image: require('../assets/images/altosAdventure.png'),
    downloads: '20k',
    stars: 4,
  },
]; // Close the array and statement with a semicolon

const games = [
  {
    id: 1,
    title: 'Shadow Fight',
    image: require('../assets/images/shadowFight.png'),
    downloads: '20M',
    stars: 4.5,
  },
  {
    id: 2,
    title: 'Valor Arena',
    image: require('../assets/images/valorArena.png'),
    downloads: '10k',
    stars: 3.4,
  },
  {
    id: 3,
    title: 'Frag',
    image: require('../assets/images/frag.png'),
    downloads: '80k',
    stars: 4.6,
  },
  {
    id: 4,
    title: 'Zooba Wildlife',
    image: require('../assets/images/zoobaGame.png'),
    downloads: '40k',
    stars: 3.5,
  },
  {
    id: 4,
    title: 'Clash of Clans',
    image: require('../assets/images/clashofclans.png'),
    downloads: '20k',
    stars: 4.2,
  },
];
export default function HomeScreens() {
  const [activeCategory, setActiveCategory] = React.useState('Action');
  const [selectedGaame, setSelectedGame] = React.useState(null);
  return (
    <LinearGradient
      className="w-full flex-1"
      colors={['rgba(216,61,219,0.4)', 'rgba(0,212,255,0.4)']}>
      <SafeAreaView>
        <View className="container">
          <View className="flex-row justify-between items-center px-4">
            <Bars3CenterLeftIcon size={30} color={storeColors.text} />
            <BellIcon size={24} color={storeColors.text} />
          </View>
          {/* Category */}
          <View className="mt-3 space-y-3">
            <Text
              className="ml-4 text-3xl font-bold"
              style={{color: storeColors.text}}>
              Browse Games
            </Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map(cat => {
                  if (cat === activeCategory) {
                    return (
                      <GradientButton
                        value={cat}
                        key={cat}
                        containerClass="mr-2"
                      />
                    );
                  } else {
                    return (
                      <TouchableOpacity
                        onPress={() => setActiveCategory(cat)}
                        key={cat}
                        className="bg-blue-100 mr-1 p-3 px-4 rounded-full">
                        <Text className="text-black">{cat}</Text>
                      </TouchableOpacity>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>

          {/* featured row */}
          <View className="mt-3 space-y-4">
            <Text
              style={{color: storeColors.text}}
              className="ml-4 text-lg font-bold">
              Featured Games
            </Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {feature.map((item, index) => {
                  return <GameCard key={index} game={item} />;
                })}
              </ScrollView>
            </View>
          </View>

          {/* top action games list  */}
          <View className="mt-3">
            <View className="flex-row justify-between items-center mb-2 pr-3">
              <Text
                style={{color: storeColors.text}}
                className="ml-4 text-lg font-bold">
                Top Action Games
              </Text>
              <TouchableOpacity>
                <Text className="text-blue-600 font-bold">See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{height: 320}}
              showsVerticalScrollIndicator={false}>
              {games.map((item, index) => {
                let bg =
                  item.id == selectedGaame
                    ? 'rgba(255,255,255,0.4)'
                    : 'transparent';
                return (
                  <TouchableOpacity
                    style={{backgroundColor: bg}}
                    onPress={() => setSelectedGame(item.id)}
                    key={index}
                    className="flex-row mx-4 p-2 mb-2 rounded-3xl">
                    <Image
                      source={item.image}
                      className="w-20 h-20 rounded-2xl"
                    />
                    <View className="flex-1 flex justify-center pl-3 space-y-3">
                      <Text
                        style={{color: storeColors.text}}
                        className="font-semibold">
                        {item.title}
                      </Text>
                      <View className="flex-row space-x-3">
                        <View className="flex-row space-x-1">
                          <Image
                            className="h-4 w-4 opacity-80"
                            source={require('../assets/images/fullStar.png')}
                          />
                          <Text className="text-xs text-gray-700">
                            {item.stars}
                          </Text>
                        </View>
                        <View className="flex-row space-x-1">
                          <ArrowDownTrayIcon size="15" color="blue" />
                          <Text className="text-xs text-gray-700">
                            {item.downloads}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex justify-center items-center">
                      <GradientButton value="play" buttonClass="py-2 px-5" />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
