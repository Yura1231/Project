import matplotlib.pyplot as plt
import numpy as np

# Дані
categories = ['Галузі застосування', 'Зручність використання', 'З програмування', 'Узагальнені користувачі']
values = [8.5, 6.5, 7.5, 6.925]  # Середні значення для кожного критерію

# Додаємо перший елемент в кінець списків для замкнутої діаграми
values += values[:1]
angles = np.linspace(0, 2 * np.pi, len(values), endpoint=False).tolist()

# Налаштування полярної діаграми
fig, ax = plt.subplots(figsize=(6, 6), subplot_kw=dict(polar=True))
ax.fill(angles, values, color='blue', alpha=0.25)
ax.plot(angles, values, color='blue', linewidth=2)
ax.set_yticklabels([])
ax.set_xticks(angles[:-1])
ax.set_xticklabels(categories)

plt.show()
