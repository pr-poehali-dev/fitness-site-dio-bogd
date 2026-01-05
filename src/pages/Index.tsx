import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

type Gender = 'male' | 'female' | null;
type Experience = 'beginner' | 'intermediate' | 'advanced' | null;
type Goal = 'bulk' | 'maintain' | 'cut' | null;

interface WorkoutPlan {
  [key: string]: {
    [goal: string]: {
      [experience: string]: {
        day: string;
        exercises: string[];
      }[];
    };
  };
}

const Index = () => {
  const [step, setStep] = useState<'welcome' | 'gender' | 'experience' | 'goal' | 'program'>('welcome');
  const [gender, setGender] = useState<Gender>(null);
  const [experience, setExperience] = useState<Experience>(null);
  const [goal, setGoal] = useState<Goal>(null);

  const workoutPlans: WorkoutPlan = {
    male: {
      bulk: {
        beginner: [
          { day: 'Понедельник', exercises: ['Приседания со штангой 4x8', 'Жим лежа 4x8', 'Тяга верхнего блока 3x10', 'Разгибания на трицепс 3x12'] },
          { day: 'Вторник', exercises: ['Отдых или легкое кардио 20 минут'] },
          { day: 'Среда', exercises: ['Становая тяга 4x6', 'Жим гантелей на наклонной скамье 4x10', 'Тяга штанги в наклоне 4x8', 'Подъем штанги на бицепс 3x12'] },
          { day: 'Четверг', exercises: ['Отдых'] },
          { day: 'Пятница', exercises: ['Жим ногами 4x10', 'Армейский жим 4x8', 'Подтягивания 3xмакс', 'Жим узким хватом 3x10'] },
          { day: 'Суббота', exercises: ['Отдых или легкая растяжка'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ],
        intermediate: [
          { day: 'Понедельник', exercises: ['Приседания со штангой 5x5', 'Жим лежа 5x5', 'Тяга штанги в наклоне 4x8', 'Жим гантелей на наклонной 3x10', 'Разгибания на трицепс 3x12'] },
          { day: 'Вторник', exercises: ['Становая тяга 5x5', 'Подтягивания широким хватом 4x8', 'Тяга Т-грифа 4x10', 'Подъем штанги на бицепс 4x10'] },
          { day: 'Среда', exercises: ['Отдых или кардио 30 минут'] },
          { day: 'Четверг', exercises: ['Жим ногами 4x10', 'Армейский жим 4x8', 'Жим узким хватом 4x8', 'Французский жим 3x12', 'Отжимания на брусьях 3xмакс'] },
          { day: 'Пятница', exercises: ['Фронтальные приседания 4x8', 'Румынская тяга 4x10', 'Сгибания ног 4x12', 'Разгибания ног 4x12', 'Икры стоя 4x15'] },
          { day: 'Суббота', exercises: ['Отдых или легкая активность'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ],
        advanced: [
          { day: 'Понедельник', exercises: ['Приседания со штангой 6x4', 'Жим лежа 6x4', 'Жим гантелей на наклонной 4x8', 'Отжимания на брусьях с весом 4x6', 'Разгибания на трицепс 4x12'] },
          { day: 'Вторник', exercises: ['Становая тяга 5x3', 'Подтягивания с весом 5x5', 'Тяга штанги в наклоне 5x6', 'Тяга гантели в наклоне 4x10', 'Подъем штанги на бицепс 4x10'] },
          { day: 'Среда', exercises: ['Жим ногами 5x8', 'Фронтальные приседания 4x8', 'Румынская тяга 4x8', 'Выпады с гантелями 4x10', 'Икры 5x12'] },
          { day: 'Четверг', exercises: ['Отдых или активное восстановление'] },
          { day: 'Пятница', exercises: ['Армейский жим 5x5', 'Жим гантелей сидя 4x8', 'Махи гантелями в стороны 4x12', 'Жим узким хватом 4x8', 'Французский жим 4x10'] },
          { day: 'Суббота', exercises: ['Кардио HIIT 30 минут + пресс'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ]
      },
      maintain: {
        beginner: [
          { day: 'Понедельник', exercises: ['Приседания 3x10', 'Жим лежа 3x10', 'Тяга верхнего блока 3x12', 'Планка 3x30сек'] },
          { day: 'Вторник', exercises: ['Кардио 30 минут средней интенсивности'] },
          { day: 'Среда', exercises: ['Становая тяга 3x8', 'Жим гантелей 3x10', 'Подтягивания 3xмакс', 'Подъем на бицепс 3x12'] },
          { day: 'Четверг', exercises: ['Отдых'] },
          { day: 'Пятница', exercises: ['Жим ногами 3x12', 'Армейский жим 3x10', 'Отжимания 3xмакс', 'Пресс 3x15'] },
          { day: 'Суббота', exercises: ['Легкая активность или йога'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ],
        intermediate: [
          { day: 'Понедельник', exercises: ['Приседания 4x10', 'Жим лежа 4x10', 'Тяга штанги в наклоне 4x10', 'Жим гантелей на наклонной 3x12'] },
          { day: 'Вторник', exercises: ['Кардио 40 минут + растяжка'] },
          { day: 'Среда', exercises: ['Становая тяга 4x8', 'Подтягивания 4x8', 'Тяга Т-грифа 3x12', 'Подъем на бицепс 4x12'] },
          { day: 'Четверг', exercises: ['Отдых или йога'] },
          { day: 'Пятница', exercises: ['Жим ногами 4x12', 'Армейский жим 4x10', 'Отжимания на брусьях 3xмакс', 'Французский жим 3x12'] },
          { day: 'Суббота', exercises: ['Кардио 30 минут + пресс'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ],
        advanced: [
          { day: 'Понедельник', exercises: ['Приседания 5x8', 'Жим лежа 5x8', 'Тяга штанги в наклоне 4x10', 'Жим гантелей 4x10'] },
          { day: 'Вторник', exercises: ['HIIT кардио 25 минут'] },
          { day: 'Среда', exercises: ['Становая тяга 4x6', 'Подтягивания с весом 4x8', 'Тяга гантели 4x10', 'Подъем штанги на бицепс 4x10'] },
          { day: 'Четверг', exercises: ['Отдых или активное восстановление'] },
          { day: 'Пятница', exercises: ['Жим ногами 4x10', 'Армейский жим 4x8', 'Жим узким хватом 4x8', 'Пресс 4x20'] },
          { day: 'Суббота', exercises: ['Кардио 35 минут средней интенсивности'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ]
      },
      cut: {
        beginner: [
          { day: 'Понедельник', exercises: ['Приседания 3x12', 'Жим лежа 3x12', 'Тяга верхнего блока 3x15', 'Кардио 15 минут'] },
          { day: 'Вторник', exercises: ['Кардио 40 минут низкой интенсивности'] },
          { day: 'Среда', exercises: ['Становая тяга 3x10', 'Жим гантелей 3x12', 'Подтягивания 3xмакс', 'Кардио 15 минут'] },
          { day: 'Четверг', exercises: ['HIIT кардио 20 минут'] },
          { day: 'Пятница', exercises: ['Жим ногами 3x15', 'Армейский жим 3x12', 'Отжимания 3xмакс', 'Пресс 3x20'] },
          { day: 'Суббота', exercises: ['Кардио 45 минут + растяжка'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ],
        intermediate: [
          { day: 'Понедельник', exercises: ['Приседания 4x12', 'Жим лежа 4x12', 'Тяга штанги 4x12', 'Кардио 20 минут'] },
          { day: 'Вторник', exercises: ['HIIT кардио 30 минут'] },
          { day: 'Среда', exercises: ['Становая тяга 4x10', 'Подтягивания 4x10', 'Тяга Т-грифа 4x12', 'Кардио 20 минут'] },
          { day: 'Четверг', exercises: ['Кардио 40 минут средней интенсивности'] },
          { day: 'Пятница', exercises: ['Жим ногами 4x15', 'Армейский жим 4x12', 'Суперсет: отжимания + пресс 4x15'] },
          { day: 'Суббота', exercises: ['HIIT кардио 25 минут + растяжка'] },
          { day: 'Воскресенье', exercises: ['Отдых или легкая прогулка'] }
        ],
        advanced: [
          { day: 'Понедельник', exercises: ['Приседания 5x10', 'Жим лежа 5x10', 'Тяга штанги 4x12', 'HIIT 15 минут'] },
          { day: 'Вторник', exercises: ['Кардио натощак 45 минут'] },
          { day: 'Среда', exercises: ['Становая тяга 4x8', 'Подтягивания с весом 4x10', 'Тяга гантели 4x12', 'HIIT 15 минут'] },
          { day: 'Четверг', exercises: ['HIIT кардио 35 минут'] },
          { day: 'Пятница', exercises: ['Круговая тренировка: жим ногами, армейский жим, отжимания, пресс 4 круга'] },
          { day: 'Суббота', exercises: ['Кардио 50 минут низкой интенсивности'] },
          { day: 'Воскресенье', exercises: ['Отдых или активное восстановление'] }
        ]
      }
    },
    female: {
      bulk: {
        beginner: [
          { day: 'Понедельник', exercises: ['Приседания 4x10', 'Румынская тяга 3x12', 'Жим ногами 3x12', 'Ягодичный мост 3x15'] },
          { day: 'Вторник', exercises: ['Отдых или легкое кардио 20 минут'] },
          { day: 'Среда', exercises: ['Жим гантелей лежа 4x10', 'Тяга верхнего блока 4x10', 'Жим гантелей на наклонной 3x12', 'Разгибания на трицепс 3x12'] },
          { day: 'Четверг', exercises: ['Отдых'] },
          { day: 'Пятница', exercises: ['Выпады с гантелями 4x10', 'Сгибания ног 3x12', 'Разгибания ног 3x12', 'Отведения ноги в кроссовере 3x15'] },
          { day: 'Суббота', exercises: ['Отдых или растяжка'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ],
        intermediate: [
          { day: 'Понедельник', exercises: ['Приседания 5x8', 'Румынская тяга 4x10', 'Жим ногами 4x10', 'Ягодичный мост со штангой 4x12', 'Отведения ноги 3x15'] },
          { day: 'Вторник', exercises: ['Жим гантелей 4x10', 'Тяга штанги в наклоне 4x10', 'Жим на наклонной 3x12', 'Подъем гантелей на бицепс 3x12'] },
          { day: 'Среда', exercises: ['Отдых или кардио 30 минут'] },
          { day: 'Четверг', exercises: ['Выпады 4x10', 'Болгарские приседания 3x12', 'Сгибания ног 4x12', 'Икры 4x15'] },
          { day: 'Пятница', exercises: ['Жим гантелей сидя 4x10', 'Тяга верхнего блока 4x10', 'Махи гантелями 3x15', 'Пресс 4x15'] },
          { day: 'Суббота', exercises: ['Отдых или йога'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ],
        advanced: [
          { day: 'Понедельник', exercises: ['Приседания со штангой 5x6', 'Румынская тяга 5x8', 'Жим ногами 4x10', 'Ягодичный мост со штангой 4x10', 'Отведения 4x15'] },
          { day: 'Вторник', exercises: ['Жим лежа 5x8', 'Тяга штанги в наклоне 5x8', 'Подтягивания 4xмакс', 'Жим гантелей 4x10'] },
          { day: 'Среда', exercises: ['Становая тяга 5x5', 'Выпады с весом 4x10', 'Болгарские приседания 4x10', 'Сгибания ног 4x12'] },
          { day: 'Четверг', exercises: ['Отдых или легкое кардио'] },
          { day: 'Пятница', exercises: ['Армейский жим 4x8', 'Жим гантелей сидя 4x10', 'Махи в стороны 4x15', 'Французский жим 4x12'] },
          { day: 'Суббота', exercises: ['HIIT кардио 30 минут + пресс'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ]
      },
      maintain: {
        beginner: [
          { day: 'Понедельник', exercises: ['Приседания 3x12', 'Румынская тяга 3x12', 'Ягодичный мост 3x15', 'Планка 3x30сек'] },
          { day: 'Вторник', exercises: ['Кардио 30 минут'] },
          { day: 'Среда', exercises: ['Жим гантелей 3x12', 'Тяга верхнего блока 3x12', 'Отжимания 3xмакс', 'Пресс 3x15'] },
          { day: 'Четверг', exercises: ['Отдых'] },
          { day: 'Пятница', exercises: ['Выпады 3x12', 'Жим ногами 3x12', 'Отведения ноги 3x15', 'Растяжка'] },
          { day: 'Суббота', exercises: ['Йога или пилатес'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ],
        intermediate: [
          { day: 'Понедельник', exercises: ['Приседания 4x10', 'Румынская тяга 4x10', 'Ягодичный мост 4x12', 'Отведения 3x15'] },
          { day: 'Вторник', exercises: ['Кардио 40 минут + растяжка'] },
          { day: 'Среда', exercises: ['Жим гантелей 4x10', 'Тяга штанги 4x10', 'Подтягивания 3xмакс', 'Пресс 4x15'] },
          { day: 'Четверг', exercises: ['Отдых или йога'] },
          { day: 'Пятница', exercises: ['Выпады 4x10', 'Болгарские приседания 3x12', 'Сгибания ног 3x12', 'Икры 3x15'] },
          { day: 'Суббота', exercises: ['Кардио 35 минут'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ],
        advanced: [
          { day: 'Понедельник', exercises: ['Приседания 4x8', 'Румынская тяга 4x10', 'Ягодичный мост со штангой 4x10', 'Отведения 4x15'] },
          { day: 'Вторник', exercises: ['HIIT кардио 30 минут'] },
          { day: 'Среда', exercises: ['Жим лежа 4x10', 'Тяга штанги 4x10', 'Подтягивания 4x8', 'Жим гантелей 4x10'] },
          { day: 'Четверг', exercises: ['Отдых или активное восстановление'] },
          { day: 'Пятница', exercises: ['Выпады с весом 4x10', 'Болгарские приседания 4x10', 'Сгибания ног 4x12', 'Пресс 4x20'] },
          { day: 'Суббота', exercises: ['Кардио 40 минут'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ]
      },
      cut: {
        beginner: [
          { day: 'Понедельник', exercises: ['Приседания 3x15', 'Румынская тяга 3x15', 'Ягодичный мост 3x20', 'Кардио 15 минут'] },
          { day: 'Вторник', exercises: ['Кардио 40 минут низкой интенсивности'] },
          { day: 'Среда', exercises: ['Жим гантелей 3x15', 'Тяга верхнего блока 3x15', 'Отжимания 3xмакс', 'Кардио 15 минут'] },
          { day: 'Четверг', exercises: ['HIIT кардио 20 минут'] },
          { day: 'Пятница', exercises: ['Выпады 3x15', 'Жим ногами 3x15', 'Пресс 4x20', 'Кардио 15 минут'] },
          { day: 'Суббота', exercises: ['Кардио 45 минут + растяжка'] },
          { day: 'Воскресенье', exercises: ['Отдых'] }
        ],
        intermediate: [
          { day: 'Понедельник', exercises: ['Приседания 4x15', 'Румынская тяга 4x12', 'Ягодичный мост 4x15', 'Кардио 20 минут'] },
          { day: 'Вторник', exercises: ['HIIT кардио 30 минут'] },
          { day: 'Среда', exercises: ['Жим гантелей 4x12', 'Тяга штанги 4x12', 'Подтягивания 3xмакс', 'Кардио 20 минут'] },
          { day: 'Четверг', exercises: ['Кардио 40 минут средней интенсивности'] },
          { day: 'Пятница', exercises: ['Круговая: выпады, жим ногами, отведения, пресс 4 круга'] },
          { day: 'Суббота', exercises: ['HIIT кардио 25 минут + растяжка'] },
          { day: 'Воскресенье', exercises: ['Отдых или легкая прогулка'] }
        ],
        advanced: [
          { day: 'Понедельник', exercises: ['Приседания 5x12', 'Румынская тяга 4x12', 'Ягодичный мост 4x15', 'HIIT 15 минут'] },
          { day: 'Вторник', exercises: ['Кардио натощак 45 минут'] },
          { day: 'Среда', exercises: ['Жим лежа 4x12', 'Тяга штанги 4x12', 'Подтягивания 4x10', 'HIIT 15 минут'] },
          { day: 'Четверг', exercises: ['HIIT кардио 35 минут'] },
          { day: 'Пятница', exercises: ['Круговая тренировка ног + пресс 5 кругов'] },
          { day: 'Суббота', exercises: ['Кардио 50 минут низкой интенсивности'] },
          { day: 'Воскресенье', exercises: ['Отдых или активное восстановление'] }
        ]
      }
    }
  };

  const exercises = [
    {
      name: 'Приседания со штангой',
      description: 'Базовое упражнение для ног и ягодиц. Штанга на трапециях, спина прямая, приседаем до параллели с полом.',
      safety: 'При проблемах с коленями: уменьшите амплитуду, используйте эластичные бинты для стабилизации.'
    },
    {
      name: 'Становая тяга',
      description: 'Комплексное упражнение для спины, ног и кора. Штанга у голеней, спина прямая, тянем вдоль ног.',
      safety: 'При болях в пояснице: используйте румынскую тягу с меньшим весом или тягу с плинтов.'
    },
    {
      name: 'Жим лежа',
      description: 'Базовое упражнение для грудных мышц. Опускаем штангу на середину груди, выжимаем вверх.',
      safety: 'При проблемах с плечами: используйте гантели или жим на наклонной скамье с меньшим углом.'
    },
    {
      name: 'Подтягивания',
      description: 'Упражнение для спины и бицепса. Широкий хват для спины, узкий для бицепса.',
      safety: 'При травмах локтей: используйте резиновые петли для помощи или тягу верхнего блока.'
    },
    {
      name: 'Румынская тяга',
      description: 'Упражнение для ягодиц и задней поверхности бедра. Штанга скользит по ногам, спина прямая.',
      safety: 'При проблемах со спиной: используйте гантели и уменьшите амплитуду.'
    },
    {
      name: 'Жим гантелей',
      description: 'Вариация жима для груди с большей амплитудой. Гантели опускаем до уровня груди.',
      safety: 'При боли в плечах: уменьшите амплитуду, не опускайте локти ниже уровня скамьи.'
    }
  ];

  const nutrition = {
    bulk: {
      eat: ['Куриная грудка, говядина', 'Рис, гречка, овсянка', 'Яйца, творог', 'Орехи, авокадо', 'Овощи и фрукты'],
      avoid: ['Фастфуд и жареное', 'Сладкие газировки', 'Чрезмерное количество сладостей', 'Алкоголь'],
      supplements: [
        { name: 'Протеин', purpose: 'Добор белка до 2г на кг веса' },
        { name: 'Креатин', purpose: 'Увеличение силы и массы' },
        { name: 'Омега-3', purpose: 'Поддержка суставов и здоровья' },
        { name: 'Витамины', purpose: 'Общее здоровье' }
      ]
    },
    maintain: {
      eat: ['Нежирное мясо и рыба', 'Крупы и цельнозерновые', 'Овощи в большом количестве', 'Фрукты умеренно', 'Кисломолочные продукты'],
      avoid: ['Избыток простых углеводов', 'Переработанные продукты', 'Избыток соли', 'Сладкие напитки'],
      supplements: [
        { name: 'Мультивитамины', purpose: 'Восполнение нехватки микроэлементов' },
        { name: 'Омега-3', purpose: 'Здоровье сердца и суставов' },
        { name: 'Протеин', purpose: 'Удобный источник белка (опционально)' }
      ]
    },
    cut: {
      eat: ['Нежирная рыба и куриная грудка', 'Зеленые овощи без ограничений', 'Яичные белки', 'Гречка и киноа в умеренных количествах', 'Ягоды'],
      avoid: ['Сахар и кондитерские изделия', 'Жирные молочные продукты', 'Жареная пища', 'Алкоголь', 'Мучные изделия'],
      supplements: [
        { name: 'Протеин', purpose: 'Сохранение мышц при дефиците калорий' },
        { name: 'BCAA', purpose: 'Защита мышц от катаболизма' },
        { name: 'Жиросжигатели', purpose: 'Ускорение метаболизма (опционально)' },
        { name: 'Витамины', purpose: 'Поддержка здоровья при диете' }
      ]
    }
  };

  const handleStart = () => setStep('gender');
  const handleGenderSelect = (selectedGender: Gender) => {
    setGender(selectedGender);
    setStep('experience');
  };
  const handleExperienceSelect = (selectedExperience: Experience) => {
    setExperience(selectedExperience);
    setStep('goal');
  };
  const handleGoalSelect = (selectedGoal: Goal) => {
    setGoal(selectedGoal);
    setStep('program');
  };

  const resetSelection = () => {
    setStep('welcome');
    setGender(null);
    setExperience(null);
    setGoal(null);
  };

  const currentPlan = gender && goal && experience 
    ? workoutPlans[gender][goal][experience] 
    : null;

  const currentNutrition = goal ? nutrition[goal] : null;

  const goalLabels: { [key: string]: string } = {
    bulk: 'Набор массы',
    maintain: 'Поддержание формы',
    cut: 'Похудение'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {step === 'welcome' && (
        <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
          <Card className="max-w-2xl w-full p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/20 p-6 rounded-2xl">
                  <Icon name="Dumbbell" size={64} className="text-primary" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DioBogd
              </h1>
              <p className="text-xl text-muted-foreground">
                Персональные тренировочные программы для достижения ваших целей
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-muted/50">
                  <Icon name="Target" size={32} className="text-primary" />
                  <span className="text-sm font-medium">Индивидуальный подход</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-muted/50">
                  <Icon name="Calendar" size={32} className="text-secondary" />
                  <span className="text-sm font-medium">Недельные программы</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-muted/50">
                  <Icon name="Flame" size={32} className="text-primary" />
                  <span className="text-sm font-medium">План питания</span>
                </div>
              </div>
              <Button 
                onClick={handleStart} 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all hover:scale-105"
              >
                Начать персонализацию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      )}

      {step === 'gender' && (
        <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
          <Card className="max-w-2xl w-full p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold">Выберите категорию</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card 
                  onClick={() => handleGenderSelect('male')}
                  className="p-8 cursor-pointer hover:border-primary transition-all hover:scale-105 bg-muted/30"
                >
                  <Icon name="User" size={64} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-semibold">Мужчина</h3>
                </Card>
                <Card 
                  onClick={() => handleGenderSelect('female')}
                  className="p-8 cursor-pointer hover:border-secondary transition-all hover:scale-105 bg-muted/30"
                >
                  <Icon name="User" size={64} className="mx-auto mb-4 text-secondary" />
                  <h3 className="text-2xl font-semibold">Женщина</h3>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      )}

      {step === 'experience' && (
        <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
          <Card className="max-w-3xl w-full p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold">Ваш опыт тренировок</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card 
                  onClick={() => handleExperienceSelect('beginner')}
                  className="p-6 cursor-pointer hover:border-primary transition-all hover:scale-105 bg-muted/30"
                >
                  <Icon name="Star" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Новичок</h3>
                  <p className="text-sm text-muted-foreground">0-1 год в зале</p>
                </Card>
                <Card 
                  onClick={() => handleExperienceSelect('intermediate')}
                  className="p-6 cursor-pointer hover:border-primary transition-all hover:scale-105 bg-muted/30"
                >
                  <Icon name="TrendingUp" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Средний</h3>
                  <p className="text-sm text-muted-foreground">1-3 года в зале</p>
                </Card>
                <Card 
                  onClick={() => handleExperienceSelect('advanced')}
                  className="p-6 cursor-pointer hover:border-primary transition-all hover:scale-105 bg-muted/30"
                >
                  <Icon name="Zap" size={48} className="mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-semibold mb-2">Продвинутый</h3>
                  <p className="text-sm text-muted-foreground">3+ года в зале</p>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      )}

      {step === 'goal' && (
        <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
          <Card className="max-w-3xl w-full p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold">Ваша цель</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card 
                  onClick={() => handleGoalSelect('bulk')}
                  className="p-6 cursor-pointer hover:border-primary transition-all hover:scale-105 bg-muted/30"
                >
                  <Icon name="TrendingUp" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Набор массы</h3>
                  <p className="text-sm text-muted-foreground">Рост мышц и силы</p>
                </Card>
                <Card 
                  onClick={() => handleGoalSelect('maintain')}
                  className="p-6 cursor-pointer hover:border-primary transition-all hover:scale-105 bg-muted/30"
                >
                  <Icon name="Activity" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Поддержание</h3>
                  <p className="text-sm text-muted-foreground">Сохранение формы</p>
                </Card>
                <Card 
                  onClick={() => handleGoalSelect('cut')}
                  className="p-6 cursor-pointer hover:border-secondary transition-all hover:scale-105 bg-muted/30"
                >
                  <Icon name="Flame" size={48} className="mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-semibold mb-2">Похудение</h3>
                  <p className="text-sm text-muted-foreground">Жиросжигание и рельеф</p>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      )}

      {step === 'program' && currentPlan && currentNutrition && (
        <div className="min-h-screen p-4 md:p-8 animate-fade-in">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Ваша программа</h1>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-base px-3 py-1">
                    {gender === 'male' ? 'Мужчина' : 'Женщина'}
                  </Badge>
                  <Badge variant="outline" className="text-base px-3 py-1">
                    {experience === 'beginner' ? 'Новичок' : experience === 'intermediate' ? 'Средний' : 'Продвинутый'}
                  </Badge>
                  <Badge variant="outline" className="text-base px-3 py-1">
                    {goal && goalLabels[goal]}
                  </Badge>
                </div>
              </div>
              <Button onClick={resetSelection} variant="outline">
                <Icon name="RotateCcw" size={20} className="mr-2" />
                Изменить параметры
              </Button>
            </div>

            <Tabs defaultValue="workout" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-auto">
                <TabsTrigger value="workout" className="text-sm md:text-base py-3">
                  <Icon name="Dumbbell" size={20} className="mr-2" />
                  Тренировки
                </TabsTrigger>
                <TabsTrigger value="nutrition" className="text-sm md:text-base py-3">
                  <Icon name="Apple" size={20} className="mr-2" />
                  Питание
                </TabsTrigger>
                <TabsTrigger value="exercises" className="text-sm md:text-base py-3">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Упражнения
                </TabsTrigger>
              </TabsList>

              <TabsContent value="workout" className="space-y-4 mt-6">
                <Card className="p-6 bg-primary/10 border-primary/30">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Icon name="Info" size={24} className="mr-2 text-primary" />
                    Рекомендации
                  </h3>
                  <p className="text-muted-foreground">
                    Выполняйте программу последовательно. Отдых между подходами: 60-90 секунд для изоляции, 2-3 минуты для базовых упражнений. 
                    Увеличивайте вес постепенно, когда можете выполнить все повторения в правильной технике.
                  </p>
                </Card>

                <div className="grid gap-4">
                  {currentPlan.map((day, index) => (
                    <Card key={index} className="p-6 hover:border-primary/50 transition-all animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-primary">{day.day}</h3>
                        <Badge variant={day.exercises[0].includes('Отдых') ? 'secondary' : 'default'}>
                          {day.exercises[0].includes('Отдых') ? 'Восстановление' : 'Тренировка'}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {day.exercises.map((exercise, i) => (
                          <li key={i} className="flex items-start">
                            <Icon name="Check" size={20} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{exercise}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="nutrition" className="space-y-6 mt-6">
                <Card className="p-6 bg-secondary/10 border-secondary/30">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Icon name="Lock" size={24} className="mr-2 text-secondary" />
                    Премиум-контент
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Подробный план питания с калорийностью, БЖУ и примерами меню доступен в платной версии. 
                    Получите персонализированные рекомендации от нутрициолога.
                  </p>
                  <Button className="bg-secondary hover:bg-secondary/90">
                    Подключить Premium
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                      <Icon name="Plus" size={24} className="mr-2" />
                      Что есть
                    </h3>
                    <ul className="space-y-2">
                      {currentNutrition.eat.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Icon name="Check" size={20} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-destructive">
                      <Icon name="X" size={24} className="mr-2" />
                      Чего избегать
                    </h3>
                    <ul className="space-y-2">
                      {currentNutrition.avoid.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Icon name="X" size={20} className="mr-2 mt-0.5 text-destructive flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <Card className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Icon name="Pill" size={28} className="mr-2 text-primary" />
                    Спортивное питание
                  </h3>
                  <div className="grid gap-4">
                    {currentNutrition.supplements.map((supplement, i) => (
                      <div key={i} className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-lg text-primary mb-1">{supplement.name}</h4>
                        <p className="text-muted-foreground">{supplement.purpose}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="exercises" className="space-y-6 mt-6">
                <Card className="p-6 bg-primary/10 border-primary/30">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <Icon name="AlertCircle" size={24} className="mr-2 text-primary" />
                    Важно
                  </h3>
                  <p className="text-muted-foreground">
                    Правильная техника важнее веса. Всегда делайте разминку перед тренировкой. 
                    При болях остановите упражнение и проконсультируйтесь с врачом.
                  </p>
                </Card>

                <Accordion type="single" collapsible className="w-full space-y-3">
                  {exercises.map((exercise, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card/50">
                      <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                        {exercise.name}
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 pt-2">
                        <div>
                          <h4 className="font-semibold text-primary mb-2 flex items-center">
                            <Icon name="BookOpen" size={18} className="mr-2" />
                            Техника выполнения
                          </h4>
                          <p className="text-muted-foreground">{exercise.description}</p>
                        </div>
                        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                          <h4 className="font-semibold text-destructive mb-2 flex items-center">
                            <Icon name="Shield" size={18} className="mr-2" />
                            При травмах
                          </h4>
                          <p className="text-sm">{exercise.safety}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;